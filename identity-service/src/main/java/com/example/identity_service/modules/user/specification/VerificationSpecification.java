package com.example.identity_service.modules.user.specification;

import org.springframework.data.jpa.domain.Specification;

import com.example.identity_service.modules.user.dto.request.VerificationFilterRequest;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.entity.VerificationSubmission;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;

public class VerificationSpecification {

    public static Specification<VerificationSubmission> filter(VerificationFilterRequest filter) {
        return (root, query, cb) -> {
            Predicate predicate = cb.conjunction();

            // 🌟 1. LUÔN INNER JOIN VỚI BẢNG USER
            Join<VerificationSubmission, User> userJoin = root.join("user", JoinType.INNER);

            // 🌟 2. LỌC ĐƠN XÁC THỰC THEO TRẠNG THÁI CỦA TÀI KHOẢN (Bỏ qua DELETED)
            if (filter.getUserStatuses() != null && !filter.getUserStatuses().isEmpty()) {
                predicate = cb.and(predicate, userJoin.get("status").in(filter.getUserStatuses()));
            }

            // 3. Lọc theo trạng thái của chính đơn xác thực (PENDING, APPROVED, REJECTED)
            if (filter.getStatus() != null) {
                predicate = cb.and(predicate, cb.equal(root.get("status"), filter.getStatus()));
            }

            // 4. Tìm kiếm theo tên hoặc email của người dùng
            if (filter.getSearch() != null && !filter.getSearch().trim().isEmpty()) {
                String searchPattern = "%" + filter.getSearch().trim().toLowerCase() + "%";

                Predicate searchByName = cb.like(cb.lower(userJoin.get("name")), searchPattern);
                Predicate searchByEmail = cb.like(cb.lower(userJoin.get("email")), searchPattern);

                predicate = cb.and(predicate, cb.or(searchByName, searchByEmail));
            }

            return predicate;
        };
    }
}
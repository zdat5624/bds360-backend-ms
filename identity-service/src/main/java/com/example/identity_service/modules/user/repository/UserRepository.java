package com.example.identity_service.modules.user.repository;

import java.time.Instant;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.modules.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
        Optional<User> findByEmail(String email);

        boolean existsByEmail(String email);

        // 1. Đếm user mới trong khoảng thời gian
        long countByCreatedAtBetween(Instant startDate, Instant endDate);

        // 2. Đếm user đã xác thực / chưa xác thực (Chỉ lấy Role = USER)
        long countByRoleAndIsVerified(Role role, Boolean isVerified);

        // 3. Biểu đồ xu hướng tăng trưởng (Native Query cho MySQL)
        // @Query(value = "SELECT DATE(created_at) as date, COUNT(id) as newUsers " +
        // "FROM users " +
        // "WHERE created_at BETWEEN :startDate AND :endDate " +
        // "GROUP BY DATE(created_at) ORDER BY date ASC", nativeQuery = true)
        // List<ManageUserStatisticsResponse.UserGrowthTrend>
        // countUserGrowthByDateNative(Instant startDate,
        // Instant endDate);

        // 4. Tìm số lượng "Người đăng tin" vs "Tài khoản chỉ xem"
        // Người đăng tin: User có ít nhất 1 bài viết (bất kể trạng thái)
        // @Query("SELECT COUNT(DISTINCT p.user.id) FROM Post p")
        // long countUsersWithAtLeastOnePost();

        @Query("SELECT SUM(u.balance) FROM User u")
        Long sumTotalSystemBalance();

        // 🌟 THÊM 2 HÀM NÀY
        boolean existsByPhone(String phone);

        // Hàm này rất quan trọng khi Update:
        // Kiểm tra xem số điện thoại đã tồn tại ở một User khác (ID khác với ID đang
        // update) hay chưa
        boolean existsByPhoneAndIdNot(String phone, Long id);

}

package com.example.listing_service.modules.post.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.listing_service.common.constant.ListingType;
import com.example.listing_service.modules.post.constant.PostStatus;
import com.example.listing_service.modules.post.dto.response.MapPostResponse;
import com.example.listing_service.modules.post.entity.Post;

import jakarta.transaction.Transactional;

public interface PostRepository extends JpaRepository<Post, Long>, JpaSpecificationExecutor<Post> {

        @Modifying
        @Transactional
        @Query("UPDATE Post p SET p.status = :newStatus WHERE p.expireDate < :now")
        int updateExpiredPosts(@Param("newStatus") PostStatus newStatus, @Param("now") Instant now);

        @Query("SELECT new com.example.listing_service.modules.post.dto.response.MapPostResponse(" +
                        "p.latitude, p.longitude, p.id, p.vip.id, p.price) " +
                        "FROM Post p " +
                        "WHERE (:minPrice IS NULL OR p.price >= :minPrice) " +
                        "AND (:maxPrice IS NULL OR p.price <= :maxPrice) " +
                        "AND (:minArea IS NULL OR p.area >= :minArea) " +
                        "AND (:maxArea IS NULL OR p.area <= :maxArea) " +
                        "AND (:categoryId IS NULL OR p.category.id = :categoryId) " +
                        "AND (:type IS NULL OR p.type = :type) " +
                        "AND (:provinceCode IS NULL OR p.province.code = :provinceCode) " +
                        "AND (:districtCode IS NULL OR p.district.code = :districtCode) " +
                        "AND (:wardCode IS NULL OR p.ward.code = :wardCode) " +
                        "AND p.status IN (com.example.listing_service.modules.post.constant.PostStatus.APPROVED, com.example.listing_service.modules.post.constant.PostStatus.REVIEW_LATER) "
                        +
                        "AND p.deletedByUser = false " +
                        "AND p.latitude IS NOT NULL AND p.longitude IS NOT NULL")
        List<MapPostResponse> findPostsForMap(
                        @Param("minPrice") Long minPrice,
                        @Param("maxPrice") Long maxPrice,
                        @Param("minArea") Double minArea,
                        @Param("maxArea") Double maxArea,
                        @Param("categoryId") Long categoryId,
                        @Param("type") ListingType type,
                        @Param("provinceCode") Long provinceCode,
                        @Param("districtCode") Long districtCode,
                        @Param("wardCode") Long wardCode);

        @Query("SELECT COUNT(p) FROM Post p WHERE p.status IN (:status1, :status2)")
        Long countByStatusIn(PostStatus status1, PostStatus status2);

        // =========================================================================
        // TODO [gRPC]: CÁC HÀM LIÊN QUAN ĐẾN THỰC THỂ USER BỊ KHUYẾT (TẠM ĐÓNG)
        // Tương lai sẽ triển khai gRPC gọi sang Identity Service để xử lý logic này
        // =========================================================================
        // List<Post> findByUser(User user);
        //
        // List<Post> findByUserOrderByViewDesc(User user, Pageable pageable);

        @Modifying
        @Query("UPDATE Post p SET p.authorName = :name, p.authorAvatar = :avatar, p.authorPhone = :phone WHERE p.userId = :userId")
        void updateAuthorInfo(@Param("userId") Long userId, @Param("name") String name, @Param("avatar") String avatar,
                        @Param("phone") String phone);

        @Modifying
        @Query("UPDATE Post p SET p.isHidden = true, p.deletedByUser = true WHERE p.userId = :userId")
        void hideAllPostsOfDeletedUser(@Param("userId") Long userId);
}
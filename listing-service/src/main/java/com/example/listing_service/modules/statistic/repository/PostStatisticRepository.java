package com.example.listing_service.modules.statistic.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.listing_service.modules.post.constant.PostStatus;
import com.example.listing_service.modules.post.entity.Post;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse.ListingTypeStats;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse.PostGrowthTrend;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse.ProvinceStats;
import com.example.listing_service.modules.statistic.dto.response.VipDistribution;

public interface PostStatisticRepository extends JpaRepository<Post, Long> {

        long countByStatusIn(List<PostStatus> statuses);

        long countByStatusInAndVip_VipLevelGreaterThan(List<PostStatus> statuses, int vipLevel);

        long countByCreatedAtBetween(Instant start, Instant end);

        @Query(value = "SELECT DATE(created_at) as date, COUNT(id) as count " +
                        "FROM posts " +
                        "WHERE created_at BETWEEN :start AND :end " +
                        "GROUP BY DATE(created_at) ORDER BY date ASC", nativeQuery = true)
        List<PostGrowthTrend> getSupplyTrend(@Param("start") Instant start, @Param("end") Instant end);

        @Query("SELECT p.category.type as type, COUNT(p) as count FROM Post p WHERE p.status IN :statuses GROUP BY p.category.type")
        List<ListingTypeStats> getDemandStructure(@Param("statuses") List<PostStatus> statuses);

        @Query("SELECT p.province.name as name, COUNT(p) as count FROM Post p WHERE p.status IN :statuses GROUP BY p.province.name ORDER BY count DESC")
        List<ProvinceStats> getTopActiveProvinces(@Param("statuses") List<PostStatus> statuses, Pageable pageable);

        List<Post> findTop5ByCreatedAtBetweenOrderByViewDesc(Instant start, Instant end);

        List<Post> findTop5ByVip_VipLevelGreaterThanOrderByCreatedAtDesc(int vipLevel);

        // Số lượng "Người đăng tin" vs "Chỉ xem"
        @Query("SELECT COUNT(DISTINCT p.userId) FROM Post p")
        long countUsersWithAtLeastOnePost();

        // Số lượng "Người dùng đang hoạt động" (Có tin đăng APPROVED / REVIEW_LATER)
        @Query("SELECT COUNT(DISTINCT p.userId) FROM Post p WHERE p.status IN (:statuses)")
        long countActiveUsersByPostStatuses(@Param("statuses") List<PostStatus> statuses);

        // Top 10
        @Query("SELECT p.userId as userId, " +
                        "p.authorName as name, " +
                        "p.createdBy as email, " +
                        "COUNT(p.id) as activePostCount " +
                        "FROM Post p " +
                        "WHERE p.status IN (:statuses) " +
                        "GROUP BY p.userId, p.authorName, p.createdBy " +
                        "ORDER BY COUNT(p.id) DESC")
        List<Object[]> getTopAgentsByActivePostsNative(
                        @Param("statuses") List<PostStatus> statuses,
                        Pageable pageable);

        Long countByUserIdAndStatus(Long userId, PostStatus status);

        @Query("SELECT COALESCE(SUM(p.view), 0) FROM Post p WHERE p.userId = :userId")
        Long sumTotalViewsByUserId(@Param("userId") Long userId);

        List<Post> findByUserIdOrderByViewDesc(Long userId, org.springframework.data.domain.Pageable pageable);

        // Tìm tất cả các Post của 1 User (chỉ trả về ID, Status để đếm) - Tối ưu hiệu
        // suất
        @Query("SELECT p.id, p.status FROM Post p WHERE p.userId = :userId")
        List<Object[]> findPostIdAndStatusByUserId(@Param("userId") Long userId);

        // Đã bổ sung lại hàm VipDistribution từ code cũ
        // (Tạm comment vì file DTO SystemOverviewResponse đang bị thiếu/chưa import,
        // bạn có thể mở ra nếu file đó đã được định nghĩa ở bên module statistic)
        //
        @Query("SELECT p.vip.vipLevel as vipLevel, COUNT(p.id) as count " +
                        "FROM Post p WHERE p.status IN :statuses AND p.vip IS NOT NULL GROUP BY p.vip.vipLevel ORDER BY p.vip.vipLevel ASC")
        List<VipDistribution> getActivePostsVipDistribution(@Param("statuses") List<PostStatus> statuses);

        // =========================================================================
        // TODO [gRPC]: CÁC HÀM THỐNG KÊ GẮN VỚI THỰC THỂ USER (TẠM ĐÓNG)
        // Tương lai sẽ cần kết hợp dữ liệu Post và User (Identity Service) qua gRPC
        // =========================================================================
        //
        // Đếm số lượng tin theo trạng thái của 1 User
        // Long countByUserAndStatus(User user, PostStatus status);
        //
        // Tính tổng view của tất cả các tin thuộc sở hữu của 1 User
        // @Query("SELECT COALESCE(SUM(p.view), 0) FROM Post p WHERE p.user = :user")
        // Long sumTotalViewsByUser(User user);
        //
        // Lấy top đại lý (Users có nhiều bài đăng Active nhất)
        // @Query("SELECT u.id as userId, u.name as name, u.email as email, COUNT(p.id)
        // as activePostCount " +
        // "FROM User u JOIN u.posts p " +
        // "WHERE p.status IN (:statuses) " +
        // "GROUP BY u.id, u.name, u.email " +
        // "ORDER BY activePostCount DESC")
        // List<ManageUserStatisticsResponse.TopAgent> getTopAgentsByActivePosts(
        // @Param("statuses") List<PostStatus> statuses, Pageable pageable);
}
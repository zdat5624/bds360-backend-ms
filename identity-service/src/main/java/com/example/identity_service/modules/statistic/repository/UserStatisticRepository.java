package com.example.identity_service.modules.statistic.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.modules.statistic.dto.response.DailyStatProjection;
import com.example.identity_service.modules.user.entity.User;

public interface UserStatisticRepository extends JpaRepository<User, Long> {

        // Tính tổng dư nợ của toàn hệ thống
        @Query("SELECT SUM(u.balance) FROM User u")
        Long sumTotalSystemBalance();

        // Đếm tổng số user hiện có (dùng cho hàm GetTotalUsers cũ)
        long count();

        long countByCreatedAtBetween(Instant startDate, Instant endDate);

        // Đếm user đã xác thực / chưa xác thực (Chỉ lấy Role = USER)
        long countByRoleAndIsVerified(Role role, Boolean isVerified);

        // Biểu đồ xu hướng tăng trưởng (Native Query cho MySQL)
        @Query(value = "SELECT DATE(created_at) as date, COUNT(id) as newUsers " +
                        "FROM users " +
                        "WHERE created_at BETWEEN :startDate AND :endDate " +
                        "GROUP BY DATE(created_at) ORDER BY date ASC", nativeQuery = true)
        List<Object[]> countUserGrowthByDateNative(@Param("startDate") Instant startDate,
                        @Param("endDate") Instant endDate);

        // Lấy số lượng người dùng mới theo từng ngày
        // @Query(value = "SELECT CAST(DATE(created_at) AS CHAR) as date, COUNT(id) as
        // value " +
        // "FROM users " +
        // "WHERE created_at BETWEEN :start AND :end " +
        // "GROUP BY CAST(DATE(created_at) AS CHAR) " +
        // "ORDER BY CAST(DATE(created_at) AS CHAR) ASC", nativeQuery = true)
        // List<DailyStatProjection> getDailyNewUsers(@Param("start") Instant start,
        // @Param("end") Instant end);

        @Query(value = "SELECT CAST(DATE(created_at) AS CHAR) as date, COUNT(id) as value " +
                        "FROM users " +
                        "WHERE created_at BETWEEN :start AND :end " +
                        "GROUP BY CAST(DATE(created_at) AS CHAR) " +
                        "ORDER BY CAST(DATE(created_at) AS CHAR) ASC", nativeQuery = true)
        List<DailyStatProjection> getDailyNewUsers(@Param("start") Instant start, @Param("end") Instant end);
}
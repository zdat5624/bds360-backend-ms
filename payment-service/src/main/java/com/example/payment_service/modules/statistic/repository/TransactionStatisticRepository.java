package com.example.payment_service.modules.statistic.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.payment_service.modules.statistic.dto.response.DailyStatProjection;
import com.example.payment_service.modules.transaction.constant.TransactionStatus;
import com.example.payment_service.modules.transaction.constant.TransactionType;
import com.example.payment_service.modules.transaction.entity.Transaction;

public interface TransactionStatisticRepository extends JpaRepository<Transaction, Long> {

        @Query("SELECT SUM(t.amount) FROM Transaction t WHERE t.type = :type AND t.status = :status AND t.createdAt BETWEEN :start AND :end")
        Long sumAmountByTypeAndStatusAndDateBetween(@Param("type") TransactionType type,
                        @Param("status") TransactionStatus status, @Param("start") Instant start,
                        @Param("end") Instant end);

        long countByTypeAndStatusAndCreatedAtBetween(TransactionType type, TransactionStatus status, Instant start,
                        Instant end);

        long countByTypeAndCreatedAtBetween(TransactionType type, Instant start, Instant end);

        @Query(value = "SELECT DATE(created_at) as date, " +
                        "SUM(CASE WHEN type = 'DEPOSIT' AND status = 'SUCCESS' THEN amount ELSE 0 END) as cashIn, " +
                        "SUM(CASE WHEN type = 'PAYMENT' AND status = 'SUCCESS' THEN ABS(amount) ELSE 0 END) as cashOut "
                        +
                        "FROM transactions WHERE created_at BETWEEN :startDate AND :endDate " +
                        "GROUP BY DATE(created_at) ORDER BY date ASC", nativeQuery = true)
        List<Object[]> getCashFlowTrendNative(@Param("startDate") Instant startDate, @Param("endDate") Instant endDate);

        @Query("SELECT t.status as status, COUNT(t.id) as count FROM Transaction t WHERE t.createdAt BETWEEN :start AND :end GROUP BY t.status")
        List<Object[]> getTransactionStatusBreakdownNative(@Param("start") Instant start, @Param("end") Instant end);

        // Lấy top spender (Sử dụng dữ liệu Soft Link userId, userName, userEmail)
        @Query("SELECT t.userId as userId, t.userName as name, t.userEmail as email, '' as avatar, SUM(ABS(t.amount)) as totalSpent "
                        + "FROM Transaction t WHERE t.type = 'PAYMENT' AND t.status = 'SUCCESS' AND t.createdAt BETWEEN :start AND :end "
                        + "GROUP BY t.userId, t.userName, t.userEmail ORDER BY totalSpent DESC")
        List<Object[]> getTopSpendersNative(@Param("start") Instant start, @Param("end") Instant end,
                        Pageable pageable);

        List<Transaction> findTop5ByTypeAndStatusOrderByCreatedAtDesc(TransactionType type, TransactionStatus status);

        List<Transaction> findTop5ByTypeAndStatusAndCreatedAtBetweenOrderByAmountAsc(TransactionType type,
                        TransactionStatus status, Instant start, Instant end);

        // 3. Nhóm hàm Thống kê / Báo cáo (Dashboard)

        @Query("SELECT SUM(t.amount) FROM Transaction t WHERE YEAR(t.createdAt) = :year AND t.status = :status AND t.amount > 0")
        Long sumAmountByYearAndStatus(Integer year, TransactionStatus status);

        @Query("SELECT SUM(t.amount) FROM Transaction t WHERE YEAR(t.createdAt) = :year AND MONTH(t.createdAt) = :month AND t.status = :status AND t.amount > 0")
        Long sumAmountByYearMonthAndStatus(Integer year, Integer month, TransactionStatus status);

        // Lấy doanh thu theo từng ngày
        // @Query(value = "SELECT CAST(DATE(created_at) AS CHAR) as date,
        // SUM(ABS(amount)) as value " +
        // "FROM transactions " +
        // "WHERE type = 'PAYMENT' AND status = 'SUCCESS' AND created_at BETWEEN :start
        // AND :end " +
        // "GROUP BY CAST(DATE(created_at) AS CHAR) " +
        // "ORDER BY CAST(DATE(created_at) AS CHAR) ASC", nativeQuery = true)
        // List<DailyStatProjection> getDailyRevenue(@Param("start") Instant start,
        // @Param("end") Instant end);

        @Query(value = "SELECT CAST(DATE(created_at) AS CHAR) as date, SUM(ABS(amount)) as value " +
                        "FROM transactions " +
                        "WHERE type = 'PAYMENT' AND status = 'SUCCESS' AND created_at BETWEEN :start AND :end " +
                        "GROUP BY CAST(DATE(created_at) AS CHAR) " +
                        "ORDER BY CAST(DATE(created_at) AS CHAR) ASC", nativeQuery = true)
        List<DailyStatProjection> getDailyRevenue(@Param("start") Instant start, @Param("end") Instant end);

        // // Tính tổng tiền theo loại giao dịch từ một thời điểm nhất định (ví dụ: đầu
        // // tháng)
        // @Query("SELECT COALESCE(SUM(t.amount), 0) FROM Transaction t WHERE t.user =
        // :user AND t.type = :type AND t.status = :status AND t.createdAt >= :since")
        // Long sumAmountByUserAndTypeAndStatusSince(User user, TransactionType type,
        // TransactionStatus status,
        // Instant since);

        // Query chi tiêu của 1 User từ 1 thời điểm
        @Query("SELECT COALESCE(SUM(t.amount), 0) FROM Transaction t WHERE t.userId = :userId AND t.type = :type AND t.status = :status AND t.createdAt >= :since")
        Long sumAmountByUserIdAndTypeAndStatusSince(@Param("userId") Long userId, @Param("type") TransactionType type,
                        @Param("status") TransactionStatus status, @Param("since") Instant since);

        // Lấy các giao dịch của 1 User từ 1 thời điểm
        List<Transaction> findByUserIdAndStatusAndCreatedAtGreaterThanEqual(Long userId, TransactionStatus status,
                        Instant createdAt);

        // Tính tổng doanh thu (sử dụng ABS vì PAYMENT lưu số âm)
        @Query("SELECT SUM(ABS(t.amount)) FROM Transaction t WHERE t.type = 'PAYMENT' AND t.status = 'SUCCESS' AND t.createdAt BETWEEN :start AND :end")
        Long sumRevenueBetween(@Param("start") Instant start, @Param("end") Instant end);

        // Đếm giao dịch nạp tiền đang chờ hoặc lỗi
        @Query("SELECT COUNT(t.id) FROM Transaction t WHERE t.type = 'DEPOSIT' AND t.status IN ('PENDING', 'FAILED')")
        long countPendingOrFailedDeposits();

}
package com.example.payment_service.modules.statistic.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.payment_service.modules.statistic.dto.response.DailyStatProjection;
import com.example.payment_service.modules.statistic.repository.TransactionStatisticRepository;
import com.example.payment_service.modules.transaction.constant.TransactionStatus;
import com.example.payment_service.modules.transaction.constant.TransactionType;
import com.example.payment_service.modules.transaction.entity.Transaction;

import lombok.RequiredArgsConstructor;
import payment.statistic.CashFlowItem;
import payment.statistic.MonthlyRevenueItem;
import payment.statistic.MonthlyRevenueListReply;
import payment.statistic.RevenueStatsReply;
import payment.statistic.RevenueTrendItem;
import payment.statistic.StatusItem;
import payment.statistic.SystemRevenueReply;
import payment.statistic.TopSpenderItem;
import payment.statistic.TransactionDashboardReply;
import payment.statistic.TransactionLogItem;

@Service
@RequiredArgsConstructor
public class ManageTransactionStatisticsService {

        private final TransactionStatisticRepository transactionStatisticRepo;

        // ==========================================
        // 1. TỔNG DOANH THU NĂM VÀ THÁNG
        // ==========================================
        @Transactional(readOnly = true)
        public RevenueStatsReply getRevenueStats(int year, int month) {
                Long totalYear = transactionStatisticRepo.sumAmountByYearAndStatus(year, TransactionStatus.SUCCESS);
                Long totalMonth = transactionStatisticRepo.sumAmountByYearMonthAndStatus(year, month,
                                TransactionStatus.SUCCESS);

                return RevenueStatsReply.newBuilder()
                                .setTotalRevenueYear(totalYear != null ? totalYear : 0L)
                                .setTotalRevenueMonth(totalMonth != null ? totalMonth : 0L)
                                .build();
        }

        // ==========================================
        // 2. DANH SÁCH DOANH THU 12 THÁNG
        // ==========================================
        @Transactional(readOnly = true)
        public MonthlyRevenueListReply getMonthlyRevenue(int year) {
                MonthlyRevenueListReply.Builder replyBuilder = MonthlyRevenueListReply.newBuilder();

                for (int m = 1; m <= 12; m++) {
                        Long revenue = transactionStatisticRepo.sumAmountByYearMonthAndStatus(year, m,
                                        TransactionStatus.SUCCESS);
                        replyBuilder.addItems(MonthlyRevenueItem.newBuilder()
                                        .setMonth(m)
                                        .setRevenue(revenue != null ? revenue : 0L)
                                        .build());
                }

                return replyBuilder.build();
        }

        @Transactional(readOnly = true)
        public TransactionDashboardReply getTransactionDashboardStats(int days) {
                Instant endDate = Instant.now();
                Instant startDate = endDate.minus(days, ChronoUnit.DAYS);
                Instant prevEndDate = startDate;
                Instant prevStartDate = prevEndDate.minus(days, ChronoUnit.DAYS);

                Long cashInObj = transactionStatisticRepo.sumAmountByTypeAndStatusAndDateBetween(
                                TransactionType.DEPOSIT, TransactionStatus.SUCCESS, startDate, endDate);
                Long prevCashInObj = transactionStatisticRepo.sumAmountByTypeAndStatusAndDateBetween(
                                TransactionType.DEPOSIT, TransactionStatus.SUCCESS, prevStartDate, prevEndDate);

                Long serviceUsageObj = transactionStatisticRepo.sumAmountByTypeAndStatusAndDateBetween(
                                TransactionType.PAYMENT, TransactionStatus.SUCCESS, startDate, endDate);
                Long prevServiceUsageObj = transactionStatisticRepo.sumAmountByTypeAndStatusAndDateBetween(
                                TransactionType.PAYMENT, TransactionStatus.SUCCESS, prevStartDate, prevEndDate);

                long totalDeposits = transactionStatisticRepo.countByTypeAndCreatedAtBetween(
                                TransactionType.DEPOSIT, startDate, endDate);
                long failedDeposits = transactionStatisticRepo.countByTypeAndStatusAndCreatedAtBetween(
                                TransactionType.DEPOSIT, TransactionStatus.FAILED, startDate, endDate);

                List<Transaction> recentDeposits = transactionStatisticRepo
                                .findTop5ByTypeAndStatusOrderByCreatedAtDesc(TransactionType.DEPOSIT,
                                                TransactionStatus.SUCCESS);
                List<Transaction> topSpendings = transactionStatisticRepo
                                .findTop5ByTypeAndStatusAndCreatedAtBetweenOrderByAmountAsc(
                                                TransactionType.PAYMENT, TransactionStatus.SUCCESS, startDate, endDate);

                List<Object[]> cashFlowData = transactionStatisticRepo.getCashFlowTrendNative(startDate, endDate);
                List<Object[]> statusData = transactionStatisticRepo.getTransactionStatusBreakdownNative(startDate,
                                endDate);
                List<Object[]> topSpendersData = transactionStatisticRepo.getTopSpendersNative(startDate, endDate,
                                PageRequest.of(0, 10));

                TransactionDashboardReply.Builder reply = TransactionDashboardReply.newBuilder()
                                .setCashIn(cashInObj != null ? cashInObj : 0L)
                                .setPrevCashIn(prevCashInObj != null ? prevCashInObj : 0L)
                                .setServiceUsage(serviceUsageObj != null ? Math.abs(serviceUsageObj) : 0L)
                                .setPrevServiceUsage(prevServiceUsageObj != null ? Math.abs(prevServiceUsageObj) : 0L)
                                .setTotalDeposits(totalDeposits)
                                .setFailedDeposits(failedDeposits);

                cashFlowData.forEach(row -> reply.addCashFlowTrend(CashFlowItem.newBuilder()
                                .setDate(row[0] != null ? row[0].toString() : "")
                                .setCashIn(parseToLongSafely(row[1])) // 🌟 SỬA Ở ĐÂY
                                .setCashOut(parseToLongSafely(row[2])) // 🌟 SỬA Ở ĐÂY
                                .build()));

                statusData.forEach(row -> reply.addStatusBreakdown(StatusItem.newBuilder()
                                .setStatus(row[0] != null ? row[0].toString() : "")
                                .setCount(parseToLongSafely(row[1])) // 🌟 SỬA Ở ĐÂY
                                .build()));

                topSpendersData.forEach(row -> reply.addTopSpenders(TopSpenderItem.newBuilder()
                                .setUserId(parseToLongSafely(row[0]))
                                .setName(row[1] != null ? row[1].toString() : "")
                                .setEmail(row[2] != null ? row[2].toString() : "")
                                .setAvatar(row[3] != null ? row[3].toString() : "")
                                .setTotalSpent(parseToLongSafely(row[4]))
                                .build()));

                reply.addAllRecentDeposits(recentDeposits.stream().map(this::mapToLog).collect(Collectors.toList()));
                reply.addAllTopSpendingLogs(topSpendings.stream().map(this::mapToLog).collect(Collectors.toList()));

                return reply.build();
        }

        private TransactionLogItem mapToLog(Transaction t) {
                return TransactionLogItem.newBuilder()
                                .setTxnId(t.getTxnId() != null ? t.getTxnId() : "")
                                .setUserId(t.getUserId() != null ? t.getUserId() : 0L) // 🌟 THÊM DÒNG NÀY
                                .setUserName(t.getUserName() != null ? t.getUserName() : "")
                                .setUserEmail(t.getUserEmail() != null ? t.getUserEmail() : "")
                                .setAmount(t.getAmount() != null ? Math.abs(t.getAmount()) : 0L)
                                .setStatus(t.getStatus() != null ? t.getStatus().name() : "UNKNOWN")
                                .setDescription(t.getDescription() != null ? t.getDescription() : "")
                                .setCreatedAtMillis(t.getCreatedAt() != null ? t.getCreatedAt().toEpochMilli()
                                                : Instant.now().toEpochMilli())
                                .build();
        }

        @Transactional(readOnly = true)
        public payment.statistic.UserFinancialReply getUserFinancialStats(long userId, int months) {
                // 1. Tính tổng chi tiêu tháng này
                Instant startOfMonth = java.time.YearMonth.now().atDay(1).atStartOfDay(java.time.ZoneId.systemDefault())
                                .toInstant();
                Long rawMonthlySpending = transactionStatisticRepo.sumAmountByUserIdAndTypeAndStatusSince(
                                userId, TransactionType.PAYMENT, TransactionStatus.SUCCESS, startOfMonth);
                long monthlySpending = rawMonthlySpending != null ? Math.abs(rawMonthlySpending) : 0L;

                // 2. Tính biểu đồ dòng tiền (CashFlow)
                java.time.YearMonth endMonth = java.time.YearMonth.now();
                java.time.YearMonth startMonth = endMonth.minusMonths(months - 1);
                Instant startInstant = startMonth.atDay(1).atStartOfDay(java.time.ZoneId.systemDefault()).toInstant();

                List<Transaction> transactions = transactionStatisticRepo
                                .findByUserIdAndStatusAndCreatedAtGreaterThanEqual(
                                                userId, TransactionStatus.SUCCESS, startInstant);

                java.time.format.DateTimeFormatter formatter = java.time.format.DateTimeFormatter.ofPattern("yyyy-MM");
                java.util.Map<String, List<Transaction>> groupedByMonth = transactions.stream()
                                .collect(Collectors.groupingBy(
                                                t -> java.time.YearMonth
                                                                .from(t.getCreatedAt().atZone(
                                                                                java.time.ZoneId.systemDefault()))
                                                                .format(formatter)));

                payment.statistic.UserFinancialReply.Builder reply = payment.statistic.UserFinancialReply.newBuilder()
                                .setMonthlySpending(monthlySpending);

                java.time.YearMonth current = startMonth;
                while (!current.isAfter(endMonth)) {
                        String monthStr = current.format(formatter);
                        List<Transaction> monthTxns = groupedByMonth.getOrDefault(monthStr,
                                        new java.util.ArrayList<>());

                        long totalDeposit = monthTxns.stream().filter(t -> t.getType() == TransactionType.DEPOSIT)
                                        .mapToLong(Transaction::getAmount).sum();
                        long totalPayment = monthTxns.stream().filter(t -> t.getType() == TransactionType.PAYMENT)
                                        .mapToLong(t -> Math.abs(t.getAmount())).sum();

                        reply.addCashFlowChart(payment.statistic.CashFlowItem.newBuilder()
                                        .setDate(monthStr) // Tái sử dụng field date của CashFlowItem cũ để lưu chuỗi
                                                           // tháng
                                        .setCashIn(totalDeposit)
                                        .setCashOut(totalPayment)
                                        .build());

                        current = current.plusMonths(1);
                }

                return reply.build();
        }

        @Transactional(readOnly = true)
        public SystemRevenueReply getSystemRevenueStats(int days) {
                Instant endDate = Instant.now();
                Instant startDate = endDate.minus(days, ChronoUnit.DAYS);
                Instant prevStartDate = startDate.minus(days, ChronoUnit.DAYS);

                Long currentRevenueObj = transactionStatisticRepo.sumRevenueBetween(startDate, endDate);
                long currentRevenue = currentRevenueObj != null ? currentRevenueObj : 0L;

                Long prevRevenueObj = transactionStatisticRepo.sumRevenueBetween(prevStartDate, startDate);
                long prevRevenue = prevRevenueObj != null ? prevRevenueObj : 0L;

                long pendingDeposits = transactionStatisticRepo.countPendingOrFailedDeposits();

                List<DailyStatProjection> revenueData = transactionStatisticRepo.getDailyRevenue(startDate, endDate);
                List<Object[]> topSpenderData = transactionStatisticRepo.getTopSpendersNative(startDate, endDate,
                                PageRequest.of(0, 5));

                SystemRevenueReply.Builder reply = SystemRevenueReply.newBuilder()
                                .setCurrentRevenue(currentRevenue)
                                .setPrevRevenue(prevRevenue)
                                .setPendingDeposits(pendingDeposits);

                revenueData.forEach(r -> reply.addRevenueTrend(RevenueTrendItem.newBuilder()
                                .setDate(r.getDate())
                                .setRevenue(r.getValue())
                                .build()));

                topSpenderData.forEach(row -> reply.addTopSpenders(TopSpenderItem.newBuilder()
                                .setUserId(row[0] != null ? ((Number) row[0]).longValue() : 0L)
                                .setName(row[1] != null ? row[1].toString() : "")
                                .setEmail(row[2] != null ? row[2].toString() : "")
                                .setAvatar(row[3] != null ? row[3].toString() : "")
                                .setTotalSpent(row[4] != null ? ((Number) row[4]).longValue() : 0L)
                                .build()));

                return reply.build();
        }

        private long parseToLongSafely(Object obj) {
                if (obj == null)
                        return 0L;
                if (obj instanceof Number) {
                        return ((Number) obj).longValue();
                }
                if (obj instanceof String) {
                        try {
                                // Xử lý trường hợp DB trả về String dạng "1000.0" hoặc "0"
                                return Double.valueOf(obj.toString()).longValue();
                        } catch (NumberFormatException e) {
                                return 0L;
                        }
                }
                return 0L;
        }
}
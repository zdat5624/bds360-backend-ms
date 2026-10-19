package com.example.identity_service.modules.statistic.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.modules.statistic.dto.response.DailyStatProjection;
import com.example.identity_service.modules.statistic.repository.UserStatisticRepository;
import com.example.identity_service.modules.user.constant.VerificationStatus;
import com.example.identity_service.modules.user.repository.VerificationSubmissionRepository;

import identity.statistic.NewUserTrendItem;
import identity.statistic.NewUserTrendReply;
import identity.statistic.PendingVerificationReply;
import identity.statistic.UserDashboardReply;
import identity.statistic.UserGrowthTrendItem;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserStatisticService {

    private final UserStatisticRepository userStatisticRepository;
    private final VerificationSubmissionRepository verificationSubmissionRepository;

    @Transactional(readOnly = true)
    public long getTotalUsers() {
        return userStatisticRepository.count();
    }

    @Transactional(readOnly = true)
    public long getTotalSystemBalance() {
        Long balanceObj = userStatisticRepository.sumTotalSystemBalance();
        return balanceObj != null ? balanceObj : 0L;
    }

    @Transactional(readOnly = true)
    public UserDashboardReply getUserDashboardStats(int days) {
        Instant endDate = Instant.now();
        Instant startDate = endDate.minus(days, ChronoUnit.DAYS);
        Instant prevEndDate = startDate;
        Instant prevStartDate = prevEndDate.minus(days, ChronoUnit.DAYS);

        long totalUsers = userStatisticRepository.count();
        long newUsers = userStatisticRepository.countByCreatedAtBetween(startDate, endDate);
        long prevNewUsers = userStatisticRepository.countByCreatedAtBetween(prevStartDate, prevEndDate);

        long verifiedUsers = userStatisticRepository.countByRoleAndIsVerified(Role.USER, true);
        long unverifiedUsers = userStatisticRepository.countByRoleAndIsVerified(Role.USER, false);

        List<Object[]> growthTrendData = userStatisticRepository.countUserGrowthByDateNative(startDate, endDate);

        UserDashboardReply.Builder reply = UserDashboardReply.newBuilder()
                .setTotalUsers(totalUsers)
                .setNewUsers(newUsers)
                .setPrevNewUsers(prevNewUsers)
                .setVerifiedCount(verifiedUsers)
                .setUnverifiedCount(unverifiedUsers);

        growthTrendData.forEach(row -> reply.addGrowthTrend(UserGrowthTrendItem.newBuilder()
                .setDate(row[0].toString())
                .setNewUsers(((Number) row[1]).longValue())
                .build()));

        return reply.build();
    }

    @Transactional(readOnly = true)
    public long getUserBalance(long userId) {
        return userStatisticRepository.findById(userId)
                .map(u -> u.getBalance() != null ? u.getBalance() : 0L)
                .orElse(0L);
    }

    @Transactional(readOnly = true)
    public PendingVerificationReply getPendingVerificationCount() {
        long count = verificationSubmissionRepository
                .countByStatus(VerificationStatus.PENDING);
        return PendingVerificationReply.newBuilder().setCount(count).build();
    }

    @Transactional(readOnly = true)
    public NewUserTrendReply getNewUserTrend(int days) {
        java.time.Instant endDate = java.time.Instant.now();
        java.time.Instant startDate = endDate.minus(days, java.time.temporal.ChronoUnit.DAYS);

        List<DailyStatProjection> newUserData = userStatisticRepository
                .getDailyNewUsers(startDate, endDate);

        java.util.Map<String, Long> userMap = newUserData.stream()
                .collect(java.util.stream.Collectors.toMap(
                        DailyStatProjection::getDate,
                        DailyStatProjection::getValue));

        NewUserTrendReply.Builder reply = NewUserTrendReply.newBuilder();

        java.time.LocalDate current = startDate.atZone(java.time.ZoneId.systemDefault()).toLocalDate();
        java.time.LocalDate end = endDate.atZone(java.time.ZoneId.systemDefault()).toLocalDate();

        while (!current.isAfter(end)) {
            String dateStr = current.toString();
            reply.addItems(NewUserTrendItem.newBuilder()
                    .setDate(dateStr)
                    .setCount(userMap.getOrDefault(dateStr, 0L))
                    .build());
            current = current.plusDays(1);
        }

        return reply.build();
    }
}
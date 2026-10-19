package com.example.listing_service.modules.statistic.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.listing_service.modules.post.constant.PostStatus;
import com.example.listing_service.modules.post.entity.Post;
import com.example.listing_service.modules.post.repository.PostViewHistoryRepository;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse.KpiSummary;
import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse.PostLogDto;
import com.example.listing_service.modules.statistic.dto.response.VipDistribution;
// 🌟 Dùng Repository Thống Kê
import com.example.listing_service.modules.statistic.repository.PostStatisticRepository;

import listing.statistic.StatusBreakdownItem;
import listing.statistic.TopAgentItem;
import listing.statistic.TopPostItem;
import listing.statistic.UserListingReply;
import listing.statistic.UserPostStatsReply;
import listing.statistic.ViewTrendItem;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ManagePostStatisticsService {

        // 🌟 Đổi Injection sang PostStatisticRepository
        private final PostStatisticRepository postStatisticRepository;
        private final PostViewHistoryRepository postViewHistoryRepository;

        @Transactional(readOnly = true)
        public long getPendingPostsCount() {
                // Dùng danh sách trạng thái cần duyệt (PENDING, REVIEW_LATER)
                List<PostStatus> pendingStatuses = Arrays.asList(PostStatus.PENDING, PostStatus.REVIEW_LATER);

                // Gọi qua PostStatisticRepository
                Long count = postStatisticRepository.countByStatusIn(pendingStatuses);

                return count != null ? count : 0L;
        }

        @Transactional(readOnly = true)
        public ManagePostStatisticsResponse getPostDashboard(int days) {
                Instant endDate = Instant.now();
                Instant startDate = endDate.minus(days, ChronoUnit.DAYS);

                Instant prevEndDate = startDate;
                Instant prevStartDate = prevEndDate.minus(days, ChronoUnit.DAYS);

                List<PostStatus> activeStatuses = Arrays.asList(PostStatus.APPROVED, PostStatus.REVIEW_LATER);
                List<PostStatus> backlogStatuses = Arrays.asList(PostStatus.PENDING, PostStatus.REVIEW_LATER);

                long activeListings = postStatisticRepository.countByStatusIn(activeStatuses);
                long newPosts = postStatisticRepository.countByCreatedAtBetween(startDate, endDate);
                long prevNewPosts = postStatisticRepository.countByCreatedAtBetween(prevStartDate, prevEndDate);
                double newPostsGrowth = calculateGrowth(newPosts, prevNewPosts);

                long moderationBacklog = postStatisticRepository.countByStatusIn(backlogStatuses);

                long vipListings = postStatisticRepository.countByStatusInAndVip_VipLevelGreaterThan(activeStatuses, 0);
                double vipRatio = activeListings > 0 ? ((double) vipListings / activeListings) * 100 : 0.0;

                KpiSummary kpis = KpiSummary.builder()
                                .activeListings(activeListings)
                                .newPosts(newPosts)
                                .newPostsGrowthPercent(Math.round(newPostsGrowth * 10.0) / 10.0)
                                .moderationBacklog(moderationBacklog)
                                .vipRatio(Math.round(vipRatio * 10.0) / 10.0)
                                .build();

                List<Post> topViewedEntities = postStatisticRepository.findTop5ByCreatedAtBetweenOrderByViewDesc(
                                startDate,
                                endDate);
                List<Post> latestVipEntities = postStatisticRepository
                                .findTop5ByVip_VipLevelGreaterThanOrderByCreatedAtDesc(0);

                return ManagePostStatisticsResponse.builder()
                                .kpis(kpis)
                                .supplyTrend(postStatisticRepository.getSupplyTrend(startDate, endDate))
                                .demandStructure(postStatisticRepository.getDemandStructure(activeStatuses))
                                .topProvinces(postStatisticRepository.getTopActiveProvinces(activeStatuses,
                                                PageRequest.of(0, 10)))
                                .topViewedPosts(mapToLogDto(topViewedEntities))
                                .latestVipPosts(mapToLogDto(latestVipEntities))
                                .build();
        }

        private double calculateGrowth(long current, long previous) {
                if (previous > 0) {
                        return ((double) (current - previous) / previous) * 100;
                } else if (current > 0) {
                        return 100.0;
                }
                return 0.0;
        }

        private List<PostLogDto> mapToLogDto(List<Post> posts) {
                return posts.stream()
                                .map(post -> PostLogDto.builder()
                                                .id(post.getId())
                                                .title(post.getTitle())
                                                .views(post.getView())
                                                .listingType(post.getCategory().getType())
                                                .userName(post.getAuthorName())
                                                .userAvatar(post.getAuthorAvatar())
                                                .vipLevel(post.getVip() != null ? post.getVip().getVipLevel() : 0)
                                                .createdAt(post.getCreatedAt())
                                                .build())
                                .collect(Collectors.toList());
        }

        @Transactional(readOnly = true)
        public UserPostStatsReply getUserPostStats() {
                List<PostStatus> activeStatuses = Arrays.asList(PostStatus.APPROVED, PostStatus.REVIEW_LATER);

                long activeUsers = postStatisticRepository.countActiveUsersByPostStatuses(activeStatuses);
                long postersCount = postStatisticRepository.countUsersWithAtLeastOnePost();

                List<Object[]> topAgentsData = postStatisticRepository.getTopAgentsByActivePostsNative(activeStatuses,
                                PageRequest.of(0, 10));

                UserPostStatsReply.Builder reply = UserPostStatsReply.newBuilder()
                                .setActiveUsers(activeUsers)
                                .setPostersCount(postersCount);

                topAgentsData.forEach(row -> reply.addTopAgents(TopAgentItem.newBuilder()
                                .setUserId(((Number) row[0]).longValue())
                                .setName(row[1] != null ? row[1].toString() : "")
                                .setEmail(row[2] != null ? row[2].toString() : "")
                                .setActivePostCount(((Number) row[3]).longValue())
                                .build()));

                return reply.build();
        }

        // Thêm đoạn này vào dưới cùng

        @Transactional(readOnly = true)
        public UserListingReply getUserListingStats(long userId, String userEmail, int days, int topLimit) {
                UserListingReply.Builder reply = UserListingReply.newBuilder();

                // 1. KPI
                Long activePosts = postStatisticRepository.countByUserIdAndStatus(userId, PostStatus.APPROVED);
                Long totalViews = postStatisticRepository.sumTotalViewsByUserId(userId);
                reply.setActivePosts(activePosts != null ? activePosts : 0L);
                reply.setTotalViews(totalViews != null ? totalViews : 0L);

                // 2. Chart Trạng thái tin
                List<Object[]> postStatuses = postStatisticRepository.findPostIdAndStatusByUserId(userId);
                java.util.Map<String, Long> statusCount = postStatuses.stream()
                                .collect(Collectors.groupingBy(row -> row[1].toString(), Collectors.counting()));

                statusCount.forEach((status, count) -> reply.addStatusChart(StatusBreakdownItem.newBuilder()
                                .setStatus(status).setCount(count).build()));

                // 3. Chart Lượt xem (Gọi qua PostViewHistoryRepository)
                // Lưu ý: Đảm bảo bạn gọi hàm countDailyViewsByPostOwnerNative từ Repo của View
                // History
                java.time.LocalDate endDate = java.time.LocalDate.now();
                java.time.LocalDate startDate = endDate.minusDays(days - 1);
                Instant startInstant = startDate.atStartOfDay(java.time.ZoneId.systemDefault()).toInstant();

                List<Object[]> rawViewData = postViewHistoryRepository.countDailyViewsByPostOwnerNative(userId,
                                startInstant);
                java.util.Map<String, Long> viewMap = rawViewData.stream()
                                .collect(Collectors.toMap(row -> row[0].toString(),
                                                row -> ((Number) row[1]).longValue()));

                java.time.LocalDate current = startDate;
                while (!current.isAfter(endDate)) {
                        String dateStr = current.toString();
                        reply.addViewChart(ViewTrendItem.newBuilder()
                                        .setDate(dateStr)
                                        .setViews(viewMap.getOrDefault(dateStr, 0L))
                                        .build());
                        current = current.plusDays(1);
                }

                // 4. Top tin bài
                List<com.example.listing_service.modules.post.entity.Post> topPosts = postStatisticRepository
                                .findByUserIdOrderByViewDesc(userId, PageRequest.of(0, topLimit));
                topPosts.forEach(post -> {
                        String vipName = post.getVip() != null ? post.getVip().getName() : "Tin thường";
                        reply.addTopPosts(TopPostItem.newBuilder()
                                        .setPostId(post.getId())
                                        .setTitle(post.getTitle() != null ? post.getTitle() : "")
                                        .setViews(post.getView() != null ? post.getView() : 0L)
                                        .setVipName(vipName)
                                        .build());
                });

                return reply.build();
        }

        @Transactional(readOnly = true)
        public listing.statistic.SystemListingReply getSystemListingStats(int days) {
                java.time.Instant endDate = java.time.Instant.now();
                java.time.Instant startDate = endDate.minus(days, java.time.temporal.ChronoUnit.DAYS);

                List<PostStatus> activeStatuses = java.util.Arrays.asList(PostStatus.APPROVED, PostStatus.REVIEW_LATER);
                List<PostStatus> backlogStatuses = java.util.Arrays.asList(PostStatus.PENDING, PostStatus.REVIEW_LATER);

                long activeUsers = postStatisticRepository.countActiveUsersByPostStatuses(activeStatuses);
                long activeListings = postStatisticRepository.countByStatusIn(activeStatuses);
                long vipListings = postStatisticRepository.countByStatusInAndVip_VipLevelGreaterThan(activeStatuses, 0);
                long pendingPosts = postStatisticRepository.countByStatusIn(backlogStatuses);

                listing.statistic.SystemListingReply.Builder reply = listing.statistic.SystemListingReply.newBuilder()
                                .setActiveUsers(activeUsers)
                                .setActiveListings(activeListings)
                                .setVipListings(vipListings)
                                .setPendingPosts(pendingPosts);

                // Vip Distributions
                List<VipDistribution> vips = postStatisticRepository
                                .getActivePostsVipDistribution(activeStatuses);
                vips.forEach(v -> reply.addVipDistributions(listing.statistic.VipDistributionItem.newBuilder()
                                .setVipLevel(v.getVipLevel() != null ? v.getVipLevel() : 0)
                                .setCount(v.getCount() != null ? v.getCount() : 0L)
                                .build()));

                // Top Posts
                List<com.example.listing_service.modules.post.entity.Post> topPosts = postStatisticRepository
                                .findTop5ByCreatedAtBetweenOrderByViewDesc(startDate, endDate);

                topPosts.forEach(post -> {
                        int vipLevel = (post.getVip() != null) ? post.getVip().getVipLevel() : 0;
                        String listingType = (post.getCategory() != null && post.getCategory().getType() != null)
                                        ? post.getCategory().getType().name()
                                        : "";

                        reply.addTopPosts(listing.statistic.PostLogDto.newBuilder()
                                        .setId(post.getId())
                                        .setTitle(post.getTitle() != null ? post.getTitle() : "")
                                        .setViews(post.getView() != null ? post.getView() : 0L)
                                        .setListingType(listingType)
                                        .setUserName(post.getAuthorName() != null ? post.getAuthorName() : "")
                                        .setUserAvatar(post.getAuthorAvatar() != null ? post.getAuthorAvatar() : "")
                                        .setVipLevel(vipLevel)
                                        .setCreatedAtMillis(post.getCreatedAt().toEpochMilli())
                                        .build());
                });

                return reply.build();
        }
}
package com.example.listing_service.grpc;

import java.util.stream.Collectors;

import com.example.listing_service.modules.statistic.dto.response.ManagePostStatisticsResponse;
import com.example.listing_service.modules.statistic.service.ManagePostStatisticsService;
import com.google.protobuf.Empty;

import io.grpc.stub.StreamObserver;
import listing.statistic.InternalListingStatisticServiceGrpc;
import listing.statistic.KpiSummary;
import listing.statistic.ListingTypeStats;
import listing.statistic.PendingPostsReply;
import listing.statistic.PostDashboardReply;
import listing.statistic.PostDashboardRequest;
import listing.statistic.PostGrowthTrend;
import listing.statistic.PostLogDto;
import listing.statistic.ProvinceStats;
import listing.statistic.UserListingReply;
import listing.statistic.UserListingRequest;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
@RequiredArgsConstructor
public class InternalListingStatisticGrpcService
                extends InternalListingStatisticServiceGrpc.InternalListingStatisticServiceImplBase {

        private final ManagePostStatisticsService managePostStatisticsService;

        // ==========================================
        // 1. HÀM CŨ: CHO ADMIN THỐNG KÊ TỔNG QUAN
        // ==========================================
        @Override
        public void getPendingPostsCount(Empty request, StreamObserver<PendingPostsReply> responseObserver) {
                // 🌟 Gọi qua hàm vừa tạo ở Service
                long count = managePostStatisticsService.getPendingPostsCount();

                PendingPostsReply reply = PendingPostsReply.newBuilder()
                                .setPendingPosts(count)
                                .build();

                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        // ==========================================
        // 2. HÀM MỚI: CHO MANAGE POST DASHBOARD
        // ==========================================
        @Override
        public void getPostDashboardStats(PostDashboardRequest request,
                        StreamObserver<PostDashboardReply> responseObserver) {
                // Lấy số ngày từ request của .NET
                int days = request.getDays();

                // Lấy data từ Service Java hiện tại của bạn
                ManagePostStatisticsResponse data = managePostStatisticsService.getPostDashboard(days);

                // Map data sang định dạng gRPC
                PostDashboardReply reply = PostDashboardReply.newBuilder()
                                .setKpis(KpiSummary.newBuilder()
                                                .setActiveListings(data.getKpis().getActiveListings())
                                                .setNewPosts(data.getKpis().getNewPosts())
                                                .setNewPostsGrowthPercent(data.getKpis().getNewPostsGrowthPercent())
                                                .setModerationBacklog(data.getKpis().getModerationBacklog())
                                                .setVipRatio(data.getKpis().getVipRatio())
                                                .build())
                                .addAllSupplyTrend(data.getSupplyTrend().stream().map(t -> PostGrowthTrend.newBuilder()
                                                .setDate(t.getDate().toString())
                                                .setCount(t.getCount())
                                                .build()).collect(Collectors.toList()))
                                .addAllDemandStructure(data.getDemandStructure().stream()
                                                .map(d -> ListingTypeStats.newBuilder()
                                                                .setType(d.getType().name())
                                                                .setCount(d.getCount())
                                                                .build())
                                                .collect(Collectors.toList()))
                                .addAllTopProvinces(data.getTopProvinces().stream().map(p -> ProvinceStats.newBuilder()
                                                .setName(p.getName())
                                                .setCount(p.getCount())
                                                .build()).collect(Collectors.toList()))
                                .addAllTopViewedPosts(
                                                data.getTopViewedPosts().stream().map(this::mapToGrpcPostLog)
                                                                .collect(Collectors.toList()))
                                .addAllLatestVipPosts(
                                                data.getLatestVipPosts().stream().map(this::mapToGrpcPostLog)
                                                                .collect(Collectors.toList()))
                                .build();

                // Gửi trả về cho .NET
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        // Hàm phụ trợ map DTO -> gRPC Proto (Chú ý xử lý chuỗi Null vì gRPC không cho
        // phép Null)
        private PostLogDto mapToGrpcPostLog(ManagePostStatisticsResponse.PostLogDto dto) {
                return PostLogDto.newBuilder()
                                .setId(dto.getId())
                                .setTitle(dto.getTitle() != null ? dto.getTitle() : "")
                                .setViews(dto.getViews() != null ? dto.getViews() : 0)
                                .setListingType(dto.getListingType() != null ? dto.getListingType().name() : "")
                                .setUserName(dto.getUserName() != null ? dto.getUserName() : "")
                                .setUserAvatar(dto.getUserAvatar() != null ? dto.getUserAvatar() : "")
                                .setVipLevel(dto.getVipLevel() != null ? dto.getVipLevel() : 0)
                                .setCreatedAtMillis(dto.getCreatedAt() != null ? dto.getCreatedAt().toEpochMilli() : 0)
                                .build();
        }

        @Override
        public void getUserPostStats(com.google.protobuf.Empty request,
                        io.grpc.stub.StreamObserver<listing.statistic.UserPostStatsReply> responseObserver) {
                listing.statistic.UserPostStatsReply reply = managePostStatisticsService.getUserPostStats();

                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getUserListingStats(UserListingRequest request,
                        io.grpc.stub.StreamObserver<UserListingReply> responseObserver) {
                UserListingReply reply = managePostStatisticsService.getUserListingStats(
                                request.getUserId(), request.getUserEmail(), request.getDays(), request.getTopLimit());
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getSystemListingStats(listing.statistic.SystemListingRequest request,
                        io.grpc.stub.StreamObserver<listing.statistic.SystemListingReply> responseObserver) {
                responseObserver.onNext(managePostStatisticsService.getSystemListingStats(request.getDays()));
                responseObserver.onCompleted();
        }
}
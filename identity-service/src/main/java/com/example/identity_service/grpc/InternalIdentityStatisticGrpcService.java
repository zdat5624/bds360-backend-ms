package com.example.identity_service.grpc;

import com.example.identity_service.modules.statistic.service.UserStatisticService;
import com.google.protobuf.Empty;

import identity.statistic.InternalIdentityStatisticServiceGrpc;
import identity.statistic.TotalBalanceReply;
import identity.statistic.TotalUsersReply;
import identity.statistic.UserBalanceReply;
import identity.statistic.UserBalanceRequest;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
@RequiredArgsConstructor
public class InternalIdentityStatisticGrpcService
        extends InternalIdentityStatisticServiceGrpc.InternalIdentityStatisticServiceImplBase {

    private final UserStatisticService userStatisticService;

    @Override
    public void getTotalUsers(Empty request, StreamObserver<TotalUsersReply> responseObserver) {
        long count = userStatisticService.getTotalUsers();
        TotalUsersReply reply = TotalUsersReply.newBuilder().setTotalUsers(count).build();

        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void getTotalSystemBalance(Empty request, StreamObserver<TotalBalanceReply> responseObserver) {
        long balance = userStatisticService.getTotalSystemBalance();
        TotalBalanceReply reply = TotalBalanceReply.newBuilder().setTotalBalance(balance).build();

        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void getUserDashboardStats(
            identity.statistic.UserDashboardRequest request,
            io.grpc.stub.StreamObserver<identity.statistic.UserDashboardReply> responseObserver) {

        try {
            int days = request.getDays();

            if (days <= 0) {
                responseObserver.onError(
                        io.grpc.Status.INVALID_ARGUMENT
                                .withDescription("days must be greater than 0")
                                .asRuntimeException());
                return;
            }

            identity.statistic.UserDashboardReply reply = userStatisticService.getUserDashboardStats(days);

            responseObserver.onNext(reply);
            responseObserver.onCompleted();

        } catch (Exception e) {
            // Ghi lại exception đầy đủ để tìm nguyên nhân thực sự.
            org.slf4j.LoggerFactory
                    .getLogger(InternalIdentityStatisticGrpcService.class)
                    .error("Failed to get user dashboard statistics", e);

            responseObserver.onError(
                    io.grpc.Status.INTERNAL
                            .withDescription("Failed to retrieve user dashboard statistics")
                            .withCause(e)
                            .asRuntimeException());
        }
    }

    @Override
    public void getUserBalance(UserBalanceRequest request,
            io.grpc.stub.StreamObserver<UserBalanceReply> responseObserver) {
        long balance = userStatisticService.getUserBalance(request.getUserId());

        UserBalanceReply reply = UserBalanceReply.newBuilder()
                .setBalance(balance)
                .build();

        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void getPendingVerificationCount(com.google.protobuf.Empty request,
            io.grpc.stub.StreamObserver<identity.statistic.PendingVerificationReply> responseObserver) {
        responseObserver.onNext(userStatisticService.getPendingVerificationCount());
        responseObserver.onCompleted();
    }

    @Override
    public void getNewUserTrend(identity.statistic.NewUserTrendRequest request,
            io.grpc.stub.StreamObserver<identity.statistic.NewUserTrendReply> responseObserver) {
        responseObserver.onNext(userStatisticService.getNewUserTrend(request.getDays()));
        responseObserver.onCompleted();
    }
}
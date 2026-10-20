package com.example.identity_service.grpc;

import com.example.identity_service.modules.user.service.UserGrpcCommandService;
import com.example.identity_service.modules.user.service.UserGrpcQueryService;

import identity.GetUsersInfoReply;
import identity.GetUsersInfoRequest;
import identity.InternalIdentityServiceGrpc;
import identity.UpdateBalanceRequest;
import identity.UpdateBalanceResponse;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;

@Slf4j
@GrpcService
@RequiredArgsConstructor
public class InternalIdentityGrpcService extends InternalIdentityServiceGrpc.InternalIdentityServiceImplBase {

    private final UserGrpcQueryService userGrpcQueryService;
    private final UserGrpcCommandService userGrpcCommandService; // Inject thêm service này

    @Override
    public void getUsersInfo(GetUsersInfoRequest request, StreamObserver<GetUsersInfoReply> responseObserver) {
        responseObserver.onNext(userGrpcQueryService.getUsersInfo(request.getUserIdsList()));
        responseObserver.onCompleted();
    }

    @Override
    public void updateUserBalance(UpdateBalanceRequest request,
            StreamObserver<UpdateBalanceResponse> responseObserver) {
        log.info("gRPC Request: Cộng {} VNĐ cho UserId {}", request.getAmount(), request.getUserId());
        try {
            // Gọi sang Command Service
            long newBalance = userGrpcCommandService.addBalance(request.getUserId(), request.getAmount());

            UpdateBalanceResponse response = UpdateBalanceResponse.newBuilder()
                    .setSuccess(true)
                    .setMessage("Cộng tiền thành công")
                    .setNewBalance(newBalance)
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();

        } catch (Exception e) {
            log.error("Lỗi khi cộng tiền gRPC cho UserId {}", request.getUserId(), e);
            UpdateBalanceResponse response = UpdateBalanceResponse.newBuilder()
                    .setSuccess(false)
                    .setMessage("Lỗi: " + e.getMessage())
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();
        }
    }
}
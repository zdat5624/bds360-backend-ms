package com.example.identity_service.grpc;

import com.example.identity_service.modules.user.service.UserGrpcQueryService;

import identity.GetUsersInfoReply;
import identity.GetUsersInfoRequest;
import identity.InternalIdentityServiceGrpc;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
@RequiredArgsConstructor
public class InternalIdentityGrpcService extends InternalIdentityServiceGrpc.InternalIdentityServiceImplBase {
    private final UserGrpcQueryService userGrpcQueryService;

    @Override
    public void getUsersInfo(GetUsersInfoRequest request, StreamObserver<GetUsersInfoReply> responseObserver) {
        responseObserver.onNext(userGrpcQueryService.getUsersInfo(request.getUserIdsList()));
        responseObserver.onCompleted();
    }
}
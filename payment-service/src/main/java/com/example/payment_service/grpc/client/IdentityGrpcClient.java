package com.example.payment_service.grpc.client;

import org.springframework.stereotype.Service;

import identity.InternalIdentityServiceGrpc;
import identity.UpdateBalanceRequest;
import identity.UpdateBalanceResponse;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.client.inject.GrpcClient;

@Slf4j
@Service
public class IdentityGrpcClient {

    @GrpcClient("identity-service")
    private InternalIdentityServiceGrpc.InternalIdentityServiceBlockingStub identityServiceStub;

    /**
     * Gọi sang Identity Service để cập nhật số dư
     */
    public UpdateBalanceResponse updateBalance(long userId, long amount) {
        try {
            // 1. Build request
            UpdateBalanceRequest request = UpdateBalanceRequest.newBuilder()
                    .setUserId(userId)
                    .setAmount(amount)
                    .build();

            // 2. Call gRPC stub
            return identityServiceStub.updateUserBalance(request);

        } catch (Exception e) {
            log.error("Lỗi kết nối gRPC sang Identity Service khi cập nhật số dư cho UserId: {}", userId, e);
            throw new RuntimeException("Lỗi khi gọi Identity Service: " + e.getMessage(), e);
        }
    }
}
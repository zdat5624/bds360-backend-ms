package com.example.listing_service.grpc.client;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.listing_service.common.exception.AppException;
import com.example.listing_service.common.exception.ErrorCode;

import identity.GetUsersInfoReply;
import identity.GetUsersInfoRequest;
import identity.InternalIdentityServiceGrpc;
import identity.UpdateBalanceRequest;
import identity.UpdateBalanceResponse;
import identity.UserInfo;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.client.inject.GrpcClient;

@Slf4j
@Service
public class IdentityGrpcClient {

    @GrpcClient("identity-service")
    private InternalIdentityServiceGrpc.InternalIdentityServiceBlockingStub identityStub;

    /**
     * Lấy số dư hiện tại của một User thông qua API GetUsersInfo (batch)
     */
    public long getUserBalance(Long userId) {
        log.info("Fetching balance for User {}", userId);

        // Tạo request với list chứa 1 userId
        GetUsersInfoRequest request = GetUsersInfoRequest.newBuilder()
                .addAllUserIds(List.of(userId))
                .build();

        GetUsersInfoReply response = identityStub.getUsersInfo(request);
        Map<Long, UserInfo> userMap = response.getUsersMap();

        if (!userMap.containsKey(userId)) {
            log.error("User {} not found in Identity Service", userId);
            throw new AppException(ErrorCode.USER_NOT_FOUND); // Cần đảm bảo có ErrorCode này
        }

        return userMap.get(userId).getBalance();
    }

    /**
     * Gọi sang Identity Service để trừ tiền user
     */
    public void deductBalance(Long userId, Long amount) {
        if (amount <= 0)
            return;

        log.info("Calling gRPC to deduct {} from User {}", amount, userId);

        UpdateBalanceRequest request = UpdateBalanceRequest.newBuilder()
                .setUserId(userId)
                .setAmount(-amount)
                .build();

        UpdateBalanceResponse response = identityStub.updateUserBalance(request);

        if (!response.getSuccess()) {
            log.error("gRPC Error: {}", response.getMessage());
            throw new AppException(ErrorCode.BALANCE_NOT_ENOUGH);
        }
    }
}
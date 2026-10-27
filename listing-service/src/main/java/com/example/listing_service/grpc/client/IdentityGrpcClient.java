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
     * Lấy số dư hiện tại của 1 User
     */
    public long getUserBalance(Long userId) {
        return getUserInfo(userId).getBalance();
    }

    /**
     * Lấy thông tin chi tiết của 1 User (Tận dụng API Batch GetUsersInfo)
     */
    public UserInfo getUserInfo(Long userId) {
        log.info("Fetching UserInfo for User {} via Batch API", userId);

        // 🌟 Bọc userId vào List có 1 phần tử để dùng chung API lấy danh sách
        GetUsersInfoRequest request = GetUsersInfoRequest.newBuilder()
                .addAllUserIds(List.of(userId))
                .build();

        GetUsersInfoReply response = identityStub.getUsersInfo(request);
        Map<Long, UserInfo> userMap = response.getUsersMap();

        // 🌟 Bóc lấy đúng User có ID vừa truyền lên
        if (!userMap.containsKey(userId)) {
            log.error("User {} not found in Identity Service", userId);
            throw new AppException(ErrorCode.USER_NOT_FOUND);
        }

        return userMap.get(userId);
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
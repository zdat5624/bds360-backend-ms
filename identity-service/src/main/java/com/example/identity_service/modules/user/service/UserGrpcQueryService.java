package com.example.identity_service.modules.user.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.repository.UserRepository;

import identity.GetUsersInfoReply;
import identity.UserInfo;
import lombok.RequiredArgsConstructor;

/**
 * Service chuyên trách xử lý các truy vấn đọc dữ liệu (Query)
 * phục vụ cho các lời gọi gRPC từ các Microservice khác.
 */
@Service
@RequiredArgsConstructor
public class UserGrpcQueryService {

    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public GetUsersInfoReply getUsersInfo(List<Long> userIds) {
        // Loại bỏ các ID trùng lặp để tối ưu SQL IN clause
        List<Long> uniqueIds = userIds.stream().distinct().toList();

        // Query database 1 lần duy nhất
        List<User> users = userRepository.findAllById(uniqueIds);

        GetUsersInfoReply.Builder reply = GetUsersInfoReply.newBuilder();

        users.forEach(user -> {
            reply.putUsers(user.getId(), UserInfo.newBuilder()
                    .setUserId(user.getId())
                    .setName(user.getName() != null ? user.getName() : "")
                    .setEmail(user.getEmail() != null ? user.getEmail() : "")
                    .setAvatar(user.getAvatar() != null ? user.getAvatar() : "")
                    .setPhone(user.getPhone() != null ? user.getPhone() : "")
                    .setAddress(user.getAddress() != null ? user.getAddress() : "")
                    .setRole(user.getRole() != null ? user.getRole().name() : Role.USER.toString())
                    .setGender(user.getGender() != null ? user.getGender().name() : "UNKNOWN")
                    .setBalance(user.getBalance() != null ? user.getBalance() : 0L)
                    .setIsVerified(user.getIsVerified() != null ? user.getIsVerified() : false)
                    .setCreatedAtMillis(user.getCreatedAt() != null ? user.getCreatedAt().toEpochMilli() : 0L)
                    .build());
        });

        return reply.build();
    }
}
package com.example.identity_service.modules.user.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.identity_service.common.exception.AppException;
import com.example.identity_service.common.exception.ErrorCode;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserGrpcCommandService {

    private final UserRepository userRepository;

    @Transactional
    public long addBalance(long userId, long amount) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        long currentBalance = user.getBalance() != null ? user.getBalance() : 0L;
        long newBalance = currentBalance + amount;
        user.setBalance(newBalance);

        userRepository.save(user);
        log.info("Cộng tiền thành công cho UserId {}. Số dư mới: {}", userId, newBalance);

        return newBalance;
    }
}
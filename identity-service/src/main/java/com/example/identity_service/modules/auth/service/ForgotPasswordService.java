package com.example.identity_service.modules.auth.service;

import java.security.SecureRandom;
import java.time.Instant;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.identity_service.common.exception.AppException;
import com.example.identity_service.common.exception.ErrorCode;
import com.example.identity_service.messaging.publisher.NotificationEventPublisher;
import com.example.identity_service.modules.auth.entity.PasswordResetToken;
import com.example.identity_service.modules.auth.repository.PasswordResetTokenRepository;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.repository.UserRepository;
import com.example.identity_service.modules.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ForgotPasswordService {

    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordResetTokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final NotificationEventPublisher notificationEventPublisher; // <-- Inject Publisher

    public void requestPasswordReset(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        String resetCode = generateResetCode();

        PasswordResetToken token = new PasswordResetToken();
        token.setToken(resetCode);
        token.setUser(user);
        tokenRepository.save(token);

        // Bắn event thay vì gọi trực tiếp EmailService
        notificationEventPublisher.publishForgotPasswordEmail(email, user.getName(), resetCode);
    }

    // Các hàm resetPassword và generateResetCode giữ nguyên...
    public void resetPassword(String email, String code, String newPassword) {
        PasswordResetToken token = tokenRepository.findByTokenAndUserEmail(code, email)
                .orElseThrow(() -> new AppException(ErrorCode.INVALID_OTP_CODE));

        if (Instant.now().isAfter(token.getExpirationTime())) {
            throw new AppException(ErrorCode.TOKEN_EXPIRED);
        }

        String encodedPassword = passwordEncoder.encode(newPassword);
        userService.forceUpdatePassword(email, encodedPassword);

        tokenRepository.delete(token);
    }

    public String generateResetCode() {
        SecureRandom random = new SecureRandom();
        int code = 10000 + random.nextInt(90000);
        return String.valueOf(code);
    }
}
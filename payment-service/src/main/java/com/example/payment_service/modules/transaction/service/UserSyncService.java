// --- File: src/main/java/com/example/payment_service/modules/transaction/service/UserSyncService.java ---
package com.example.payment_service.modules.transaction.service;

import org.springframework.stereotype.Service;

import com.example.payment_service.modules.transaction.repository.TransactionRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserSyncService {

    private final TransactionRepository transactionRepository;

    /**
     * Đồng bộ thông tin tên, email của user lên các Transaction cũ
     */
    public void syncUserProfile(Long userId, String name, String email) {
        if (userId == null)
            return;

        try {
            int updatedCount = transactionRepository.syncUserInfo(userId, name, email);
            log.info("Đã đồng bộ thông tin User (ID: {}) cho {} giao dịch.", userId, updatedCount);
        } catch (Exception e) {
            log.error("Lỗi khi đồng bộ thông tin User (ID: {}) vào bảng transactions: ", userId, e);
            throw e;
        }
    }
}
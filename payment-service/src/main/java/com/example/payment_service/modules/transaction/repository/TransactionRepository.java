package com.example.payment_service.modules.transaction.repository;

import java.time.Instant;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.payment_service.modules.transaction.entity.Transaction;

import jakarta.transaction.Transactional;

public interface TransactionRepository extends JpaRepository<Transaction, Long>, JpaSpecificationExecutor<Transaction> {

        // 1. Hàm dùng riêng cho VNPAY Callback / IPN
        Optional<Transaction> findByTxnId(String txnId);

        // 2. Hàm dùng cho Scheduler (Chạy ngầm dọn dẹp giao dịch rác)
        @Modifying
        @Transactional
        @Query("UPDATE Transaction t SET t.status = 'FAILED', t.description = 'Giao dịch hết hạn: người dùng không hoàn thành' WHERE t.status = 'PENDING' AND t.createdAt <= :expiryTime")
        int updateExpiredTransactions(Instant expiryTime);

}
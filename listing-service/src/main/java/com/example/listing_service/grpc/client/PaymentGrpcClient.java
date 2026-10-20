package com.example.listing_service.grpc.client;

import org.springframework.stereotype.Service;

import com.example.listing_service.security.dto.UserContext;

import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.client.inject.GrpcClient;
import payment.CreateTransactionRequest;
import payment.CreateTransactionResponse;
import payment.GrpcTransactionType;
import payment.InternalPaymentServiceGrpc;

@Slf4j
@Service
public class PaymentGrpcClient {

    @GrpcClient("payment-service")
    private InternalPaymentServiceGrpc.InternalPaymentServiceBlockingStub paymentStub;

    public void logPaymentTransaction(UserContext userContext, Long amount, String description) {
        log.info("Calling Payment Service via gRPC to log transaction for User: {}", userContext.getId());

        String userName = userContext.getName() != null ? userContext.getName() : "Unknown";
        String userEmail = userContext.getEmail() != null ? userContext.getEmail() : "Unknown";

        CreateTransactionRequest request = CreateTransactionRequest.newBuilder()
                .setUserId(userContext.getId())
                .setUserName(userName)
                .setUserEmail(userEmail)
                .setAmount(amount) // Truyền số tiền (Server sẽ tự ép thành số âm)
                .setDescription(description)
                .setType(GrpcTransactionType.PAYMENT)
                .build();

        try {
            CreateTransactionResponse response = paymentStub.createTransaction(request);
            if (!response.getSuccess()) {
                log.error("Payment Service failed to record transaction: {}", response.getMessage());
            } else {
                log.info("Successfully recorded transaction ID: {}", response.getTransactionId());
            }
        } catch (Exception e) {
            log.error("gRPC call to Payment Service failed for User: {}", userContext.getId(), e);
        }
    }
}
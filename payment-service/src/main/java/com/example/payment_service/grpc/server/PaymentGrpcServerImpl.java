package com.example.payment_service.grpc.server;

import com.example.payment_service.modules.transaction.constant.TransactionStatus;
import com.example.payment_service.modules.transaction.constant.TransactionType;
import com.example.payment_service.modules.transaction.entity.Transaction;
import com.example.payment_service.modules.transaction.repository.TransactionRepository;

import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;
import payment.CreateTransactionRequest;
import payment.CreateTransactionResponse;
import payment.GrpcTransactionType;
import payment.InternalPaymentServiceGrpc;

@Slf4j
@GrpcService
@RequiredArgsConstructor
public class PaymentGrpcServerImpl extends InternalPaymentServiceGrpc.InternalPaymentServiceImplBase {

    private final TransactionRepository transactionRepository;

    @Override
    public void createTransaction(CreateTransactionRequest request,
            StreamObserver<CreateTransactionResponse> responseObserver) {
        log.info("Received gRPC request to create transaction for User: {}, Raw Amount: {}", request.getUserId(),
                request.getAmount());

        try {
            Transaction transaction = new Transaction();
            transaction.setUserId(request.getUserId());
            transaction.setUserName(request.getUserName());
            transaction.setUserEmail(request.getUserEmail());
            transaction.setDescription(request.getDescription());

            // 🌟 LOGIC XỬ LÝ SỐ TIỀN ÂM / DƯƠNG TỰ ĐỘNG
            long rawAmount = Math.abs(request.getAmount()); // Lấy giá trị tuyệt đối trước

            if (request.getType() == GrpcTransactionType.PAYMENT) {
                transaction.setType(TransactionType.PAYMENT);
                transaction.setAmount(-rawAmount); // Ép buộc thành SỐ ÂM cho giao dịch trừ tiền
            } else {
                transaction.setType(TransactionType.DEPOSIT);
                transaction.setAmount(rawAmount); // Ép buộc thành SỐ DƯƠNG cho nạp tiền
            }

            // Giao dịch nội bộ qua gRPC sau khi Identity đã trừ tiền thành công -> Mặc định
            // SUCCESS
            transaction.setStatus(TransactionStatus.SUCCESS);

            Transaction savedTxn = transactionRepository.save(transaction);

            CreateTransactionResponse response = CreateTransactionResponse.newBuilder()
                    .setSuccess(true)
                    .setMessage("Transaction created successfully")
                    .setTransactionId(savedTxn.getId() != null ? savedTxn.getId() : 0L)
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();

        } catch (Exception e) {
            log.error("Failed to save transaction via gRPC for userId: {}", request.getUserId(), e);
            CreateTransactionResponse response = CreateTransactionResponse.newBuilder()
                    .setSuccess(false)
                    .setMessage("Lỗi tạo giao dịch gRPC: " + e.getMessage())
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();
        }
    }
}
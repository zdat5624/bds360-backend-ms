package com.example.payment_service.messaging.publisher;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import com.example.payment_service.messaging.config.RabbitMQConfig;

import event.DepositSuccessEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    public void publishDepositSuccess(String email, String username, double amount, String transactionTime) {
        // 1. Đóng gói dữ liệu bằng Protobuf
        DepositSuccessEvent event = DepositSuccessEvent.newBuilder()
                .setTo(email)
                .setUsername(username)
                .setAmount(amount)
                .setTransactionTime(transactionTime)
                .build();

        // 2. Gửi byte[] vào RabbitMQ kèm Header "event_type"
        rabbitTemplate.convertAndSend(RabbitMQConfig.EMAIL_QUEUE, event.toByteArray(), message -> {
            message.getMessageProperties().setHeader("event_type", "send_deposit_success_email");
            return message;
        });

        log.info("Đã gửi yêu cầu email nạp tiền cho {} vào RabbitMQ (Protobuf)", username);
    }
}
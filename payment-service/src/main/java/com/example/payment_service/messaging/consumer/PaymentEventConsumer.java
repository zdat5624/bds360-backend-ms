// --- File: src/main/java/com/example/payment_service/messaging/consumer/PaymentEventConsumer.java ---
package com.example.payment_service.messaging.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.example.payment_service.messaging.config.RabbitMQConfig;
import com.example.payment_service.modules.transaction.service.UserSyncService;

import event.UserProfileUpdatedEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class PaymentEventConsumer {

    private final UserSyncService userSyncService;

    @RabbitListener(queues = RabbitMQConfig.PAYMENT_USER_SYNC_QUEUE)
    public void handleUserEvents(byte[] messageBytes, org.springframework.amqp.core.Message message) throws Exception {
        String routingKey = message.getMessageProperties().getReceivedRoutingKey();

        try {
            if ("user.updated".equals(routingKey)) {
                // Parse Protobuf event
                UserProfileUpdatedEvent event = UserProfileUpdatedEvent.parseFrom(messageBytes);

                // Đồng bộ qua Service
                userSyncService.syncUserProfile(
                        event.getUserId(),
                        event.getName(),
                        event.getEmail() // Cập nhật tên và email mới trên hóa đơn
                );

                log.info("Handled UPDATED event for userId: {}", event.getUserId());
            }
        } catch (Exception e) {
            log.error("Error processing RabbitMQ event with routingKey: {}", routingKey, e);
            throw e;
        }
    }
}
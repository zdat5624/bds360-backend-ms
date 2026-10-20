package com.example.listing_service.messaging.consumer;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.example.listing_service.messaging.config.RabbitMQConfig;
import com.example.listing_service.modules.post.service.UserSyncService;

import event.UserDeletedEvent;
import event.UserProfileUpdatedEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserEventConsumer {

    private final UserSyncService userSyncService;

    @RabbitListener(queues = RabbitMQConfig.LISTING_USER_SYNC_QUEUE)
    public void handleUserEvents(byte[] messageBytes, Message message) throws Exception {
        String routingKey = message.getMessageProperties().getReceivedRoutingKey();

        try {
            if ("user.updated".equals(routingKey)) {
                UserProfileUpdatedEvent event = UserProfileUpdatedEvent.parseFrom(messageBytes);
                userSyncService.syncUserProfile(
                        event.getUserId(),
                        event.getName(),
                        event.getAvatar(),
                        event.getPhone());
            } else if ("user.deleted".equals(routingKey)) {
                UserDeletedEvent event = UserDeletedEvent.parseFrom(messageBytes);
                userSyncService.handleUserDeleted(event.getUserId());
            }
        } catch (Exception e) {
            log.error("Error processing RabbitMQ event with routingKey: {}", routingKey, e);
            throw e; // Bắt buộc throw lại để RabbitMQ biết message lỗi mà Retry/chuyển sang DLQ
        }
    }
}
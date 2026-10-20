package com.example.identity_service.messaging.publisher;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import com.example.identity_service.messaging.config.RabbitMQConfig;
import com.example.identity_service.modules.user.entity.User;

import event.UserDeletedEvent;
import event.UserProfileUpdatedEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    /**
     * Bắn event khi một User bị xóa (xóa mềm)
     */
    public void publishUserDeletedEvent(long userId, String email) {
        try {
            UserDeletedEvent event = UserDeletedEvent.newBuilder()
                    .setUserId(userId)
                    .setEmail(email)
                    .build();

            rabbitTemplate.convertAndSend(RabbitMQConfig.IDENTITY_EXCHANGE, "user.deleted", event.toByteArray());
            log.info("Published UserDeletedEvent for userId: {}", userId);
        } catch (Exception e) {
            log.error("Failed to publish UserDeletedEvent for userId: {}", userId, e);
        }
    }

    /**
     * Bắn event khi thông tin Profile của User được cập nhật
     */
    public void publishProfileUpdatedEvent(User user) {
        try {
            UserProfileUpdatedEvent event = UserProfileUpdatedEvent.newBuilder()
                    .setUserId(user.getId())
                    .setName(user.getName() != null ? user.getName() : "")
                    .setAvatar(user.getAvatar() != null ? user.getAvatar() : "")
                    .setEmail(user.getEmail() != null ? user.getEmail() : "")
                    .setPhone(user.getPhone() != null ? user.getPhone() : "")
                    .build();

            rabbitTemplate.convertAndSend(RabbitMQConfig.IDENTITY_EXCHANGE, "user.updated", event.toByteArray());
            log.info("Published UserProfileUpdatedEvent for userId: {}", user.getId());
        } catch (Exception e) {
            log.error("Failed to publish UserProfileUpdatedEvent for userId: {}", user.getId(), e);
        }
    }
}
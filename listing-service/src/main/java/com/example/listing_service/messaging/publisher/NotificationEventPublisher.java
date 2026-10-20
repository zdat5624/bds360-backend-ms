package com.example.listing_service.messaging.publisher;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import event.PostNotificationEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class NotificationEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    public void publishPostNotification(Long userId, String title, String messageContent, String notificationType) {
        try {
            PostNotificationEvent event = PostNotificationEvent.newBuilder()
                    .setUserId(userId != null ? userId : 0L)
                    .setTitle(title != null ? title : "")
                    .setMessage(messageContent != null ? messageContent : "")
                    .setNotificationType(notificationType != null ? notificationType : "POST")
                    .build();

            MessageProperties messageProperties = new MessageProperties();
            // Đặt header event_type tương thích với deserializer NestJS
            messageProperties.setHeader("event_type", "send_post_notification");

            Message message = new Message(event.toByteArray(), messageProperties);

            // Bắn trực tiếp vào "notification_queue" (hoặc "email_queue" tùy theo queue bạn
            // cấu hình)
            rabbitTemplate.send("", "notification_queue", message);
            log.info("Published PostNotificationEvent for userId: {}, title: {}", userId, title);

        } catch (Exception e) {
            log.error("Failed to publish PostNotificationEvent for userId: {}", userId, e);
        }
    }
}
package com.example.identity_service.messaging.publisher;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import event.ForgotPasswordEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class NotificationEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    public void publishForgotPasswordEmail(String to, String username, String resetCode) {
        try {
            // Build dữ liệu bằng Protobuf
            ForgotPasswordEvent event = ForgotPasswordEvent.newBuilder()
                    .setTo(to)
                    .setUsername(username)
                    .setResetCode(resetCode)
                    .build();

            // Set header event_type để khớp với deserializer của NestJS
            MessageProperties messageProperties = new MessageProperties();
            messageProperties.setHeader("event_type", "send_forgot_password_email");

            Message message = new Message(event.toByteArray(), messageProperties);

            // Publish trực tiếp vào queue "email_queue" (sử dụng default exchange "")
            rabbitTemplate.send("", "email_queue", message);
            log.info("Published ForgotPasswordEvent to queue for email: {}", to);

        } catch (Exception e) {
            log.error("Failed to publish ForgotPasswordEvent for email: {}", to, e);
        }
    }
}
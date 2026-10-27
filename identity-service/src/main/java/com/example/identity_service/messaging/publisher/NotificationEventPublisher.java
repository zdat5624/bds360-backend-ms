// --- File: messaging/publisher/NotificationEventPublisher.java ---
package com.example.identity_service.messaging.publisher;

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
            ForgotPasswordEvent event = ForgotPasswordEvent.newBuilder()
                    .setTo(to)
                    .setUsername(username)
                    .setResetCode(resetCode)
                    .build();

            rabbitTemplate.convertAndSend("", "email_queue", event.toByteArray(), message -> {
                message.getMessageProperties().setContentType("application/x-protobuf");
                message.getMessageProperties().setHeader("pattern", "send_forgot_password_email");
                return message;
            });

            log.info("Published ForgotPasswordEvent to queue for email: {}", to);

        } catch (Exception e) {
            log.error("Failed to publish ForgotPasswordEvent for email: {}", to, e);
        }
    }
}
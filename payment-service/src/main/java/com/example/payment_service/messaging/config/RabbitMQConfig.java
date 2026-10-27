package com.example.payment_service.messaging.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    public static final String IDENTITY_EXCHANGE = "identity_exchange";
    public static final String PAYMENT_USER_SYNC_QUEUE = "payment_user_sync_queue";
    public static final String EMAIL_QUEUE = "email_queue";

    @Bean
    public TopicExchange identityExchange() {
        return new TopicExchange(IDENTITY_EXCHANGE);
    }

    @Bean
    public Queue paymentUserSyncQueue() {
        return new Queue(PAYMENT_USER_SYNC_QUEUE, true);
    }

    // 🌟 CHỈ BINDING SỰ KIỆN UPDATE: Giữ nguyên dữ liệu giao dịch cũ khi User bị
    // xóa
    @Bean
    public Binding bindingUserUpdated(Queue paymentUserSyncQueue, TopicExchange identityExchange) {
        return BindingBuilder.bind(paymentUserSyncQueue).to(identityExchange).with("user.updated");
    }

    @Bean
    public Queue emailQueue() {
        return new Queue(EMAIL_QUEUE, true); // true = durable (bền vững)
    }
}
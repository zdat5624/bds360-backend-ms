package com.example.listing_service.messaging.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    public static final String IDENTITY_EXCHANGE = "identity_exchange";
    public static final String LISTING_USER_SYNC_QUEUE = "listing_user_sync_queue";

    @Bean
    public TopicExchange identityExchange() {
        return new TopicExchange(IDENTITY_EXCHANGE);
    }

    @Bean
    public Queue listingUserSyncQueue() {
        return new Queue(LISTING_USER_SYNC_QUEUE, true); // true = bền vững (durable)
    }

    @Bean
    public Binding bindingUserUpdated(Queue listingUserSyncQueue, TopicExchange identityExchange) {
        return BindingBuilder.bind(listingUserSyncQueue).to(identityExchange).with("user.updated");
    }

    @Bean
    public Binding bindingUserDeleted(Queue listingUserSyncQueue, TopicExchange identityExchange) {
        return BindingBuilder.bind(listingUserSyncQueue).to(identityExchange).with("user.deleted");
    }
}
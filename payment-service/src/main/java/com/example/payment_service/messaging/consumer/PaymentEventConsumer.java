package com.example.payment_service.messaging.consumer;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class PaymentEventConsumer {

    // private final TransactionRepository transactionRepository;

    // @RabbitListener(queues = RabbitMQConfig.PAYMENT_USER_SYNC_QUEUE)
    // @Transactional
    // public void handleUserEvents(byte[] messageBytes,
    // org.springframework.amqp.core.Message message) {
    // String routingKey = message.getMessageProperties().getReceivedRoutingKey();

    // try {
    // if ("user.deleted".equals(routingKey)) {
    // UserDeletedEvent event = UserDeletedEvent.parseFrom(messageBytes);
    // Long userId = event.getUserId();

    // // Ẩn danh giao dịch cũ
    // transactionRepository.anonymizeTransactionsForUser(userId);

    // log.info("Handled DELETED event for userId: {}. Transactions anonymized.",
    // userId);
    // }
    // } catch (Exception e) {
    // log.error("Error processing RabbitMQ event with routingKey: {}", routingKey,
    // e);
    // }
    // }
}
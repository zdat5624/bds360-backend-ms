// src/config/rabbitmq.config.ts
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// Import envConfig của bạn vào đây (hoặc sử dụng ConfigService của NestJS)
import { envConfig } from './env.config';

export const getRabbitMQConfig = (): MicroserviceOptions => ({
    transport: Transport.RMQ,
    options: {
        urls: [
            `amqp://${envConfig.RABBITMQ_USER}:${envConfig.RABBITMQ_PASSWORD}@${envConfig.RABBITMQ_HOST}:${envConfig.RABBITMQ_PORT}`
        ],
        queue: 'email_queue',
        queueOptions: {
            durable: true, // Đảm bảo queue không bị mất khi RabbitMQ restart
        },
        deserializer: {
            deserialize: (value: { properties?: { headers?: { event_type?: string } }, content?: Buffer }) => {
                const pattern = value?.properties?.headers?.event_type || 'UnknownEvent';
                return { pattern, data: value?.content };
            },
        },
        // prefetchCount: 1, // Bật cái này nếu muốn xử lý tuần tự từng message một (tránh quá tải)
    },
});
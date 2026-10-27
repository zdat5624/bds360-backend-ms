// --- File: src/config/rabbitmq.config.ts ---
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envConfig } from './env.config';

interface RmqDeserializeOptions {
    headers?: Record<string, unknown>;
    fields?: Record<string, unknown>;
    properties?: {
        headers?: Record<string, unknown>;
    };
}

export const getRabbitMQConfig = (): MicroserviceOptions => ({
    transport: Transport.RMQ,
    options: {
        urls: [
            `amqp://${envConfig.RABBITMQ_USER}:${envConfig.RABBITMQ_PASSWORD}@${envConfig.RABBITMQ_HOST}:${envConfig.RABBITMQ_PORT}`
        ],
        queue: 'email_queue',
        queueOptions: {
            durable: true,
        },
        deserializer: {
            // 🌟 Chú ý: NestJS truyền (value, options) chứ không chỉ 1 tham số!
            deserialize: (value: unknown, options?: RmqDeserializeOptions) => {
                // Kiểm tra headers ở cả options (NestJS chuẩn) lẫn trong value
                const valueObj = (typeof value === 'object' && value !== null) ? (value as Record<string, unknown>) : {};
                const valueProps = (typeof valueObj.properties === 'object' && valueObj.properties !== null)
                    ? (valueObj.properties as Record<string, unknown>)
                    : {};

                const headers = (
                    options?.headers ||
                    options?.properties?.headers ||
                    valueProps.headers ||
                    valueObj.headers ||
                    {}
                ) as Record<string, unknown>;

                console.log('\n📬 [RabbitMQ] Options nhận được:', options);
                console.log('📬 [RabbitMQ] RAW Headers nhận được:', headers);

                const rawPattern = headers['pattern'];
                let pattern = 'UnknownEvent';

                if (Buffer.isBuffer(rawPattern)) {
                    pattern = rawPattern.toString('utf8');
                } else if (typeof rawPattern === 'string') {
                    pattern = rawPattern;
                }

                console.log(`🎯 [RabbitMQ] Pattern bóc xuất được: -> ${pattern} <-`);

                return {
                    pattern: pattern,
                    data: value,
                };
            },
        },
    },
});
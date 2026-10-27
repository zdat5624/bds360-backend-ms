// --- File: src/config/env.config.ts ---
import { config } from 'dotenv';
import { z } from 'zod';

config({ path: ['.env', '../.env'] });

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

    NOTIFICATION_PORT: z.coerce.number().int().positive().default(3002),

    DB_HOST: z.string().min(1).default('localhost'),
    DB_PORT: z.coerce.number().int().positive().default(3306),
    DB_USERNAME: z.string().min(1).default('root'),
    DB_PASSWORD: z.string().min(1).default('root'),
    DB_DATABASE: z.string().min(1).default('bds360_notification_db'),

    JWT_SECRET: z.string().min(1, 'JWT_SECRET không được để trống'),

    MAIL_USERNAME: z.string().email('MAIL_USERNAME phải là email hợp lệ'),
    MAIL_PASSWORD: z.string().min(1, 'MAIL_PASSWORD không được để trống'),

    RABBITMQ_HOST: z.string().default('localhost'),
    RABBITMQ_PORT: z.coerce.number().int().positive().default(5672),
    RABBITMQ_USER: z.string().default('guest'),
    RABBITMQ_PASSWORD: z.string().default('guest'),

    GRPC_NOTIFICATION_PORT: z.coerce.number().int().positive().default(9095),
});

export type EnvConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvConfig {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        console.error('❌ Lỗi cấu hình biến môi trường Notification Service (.env):', parsed.error.format());
        process.exit(1);
    }

    return parsed.data;
}

export const envConfig = validateEnv();
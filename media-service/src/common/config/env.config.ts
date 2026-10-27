// --- File: config/env.config.ts ---
import { config } from 'dotenv';
import { z } from 'zod';

// Lùi ra 1 cấp để tìm file .env tổng (hỗ trợ chạy local)
config({ path: ['.env', '../.env'] });

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

    // 🌟 Đã map thêm MEDIA_HOST từ .env
    MEDIA_HOST: z.string().default('localhost'),
    MEDIA_PORT: z.coerce.number().int().positive().default(3001),

    // 🌟 Cấu hình JWT
    JWT_SECRET: z.string().min(1, 'JWT_SECRET không được để trống'),
    JWT_TOKEN_VALIDITY_IN_SECONDS: z.coerce.number().int().positive().default(86400000),

    // 🌟 Cấu hình Cloudinary
    CLOUDINARY_CLOUD_NAME: z.string().min(1, 'CLOUDINARY_CLOUD_NAME không được để trống'),
    CLOUDINARY_API_KEY: z.string().min(1, 'CLOUDINARY_API_KEY không được để trống'),
    CLOUDINARY_API_SECRET: z.string().min(1, 'CLOUDINARY_API_SECRET không được để trống'),
});

export type EnvConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvConfig {
    // Đưa thẳng process.env cho Zod kiểm tra
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        console.error('❌ Lỗi cấu hình biến môi trường Media Service (.env):', parsed.error.format());
        process.exit(1);
    }

    return parsed.data;
}

export const envConfig = validateEnv();
// File: src/main.ts
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filter/global-exception.filter';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { CustomValidationPipe } from './common/pipe/custom-validation.pipe';
import { envConfig } from './config/env.config';

async function bootstrap() {
  // 1. Chỉ khởi tạo AppModule 1 lần duy nhất
  const app = await NestFactory.create(AppModule);

  // 2. Cấu hình các Middleware cho HTTP
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new GlobalExceptionFilter());

  // 3. 🌟 "CẮM" (CONNECT) MICROSERVICE VÀO APP ĐANG CÓ
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${envConfig.RABBITMQ_USER}:${envConfig.RABBITMQ_PASSWORD}@${envConfig.RABBITMQ_HOST}:${envConfig.RABBITMQ_PORT}`],
      queue: 'email_queue', // Tên hàng đợi
      queueOptions: {
        durable: true, // Giữ message khi RabbitMQ restart
      },
    },
  });

  // 4. Bắt đầu lắng nghe các event từ RabbitMQ (Không block luồng HTTP)
  await app.startAllMicroservices();
  console.log('🐰 Notification Service (RabbitMQ) is listening to "email_queue"');

  // 5. Mở port chạy server HTTP
  const PORT = envConfig.NOTIFICATION_PORT;
  await app.listen(PORT);
  console.log(`🚀 Notification Service (HTTP) is running on port: ${PORT}`);
}

void bootstrap();
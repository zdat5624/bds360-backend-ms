// --- File: src/main.ts ---
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filter/global-exception.filter';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { CustomValidationPipe } from './common/pipe/custom-validation.pipe';
import { envConfig } from './config/env.config';

// 🌟 Import 2 file cấu hình RabbitMQ và gRPC
import { getGrpcConfig } from './config/grpc.config';
import { getRabbitMQConfig } from './config/rabbitmq.config';

async function bootstrap() {
  // 1. Chỉ khởi tạo AppModule 1 lần duy nhất
  const app = await NestFactory.create(AppModule);

  // 2. Cấu hình các Middleware cho HTTP
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new GlobalExceptionFilter());

  // 3. 🌟 CẮM RABBITMQ MICROSERVICE
  app.connectMicroservice(getRabbitMQConfig());

  // 4. 🌟 CẮM gRPC MICROSERVICE
  app.connectMicroservice(getGrpcConfig());

  // 5. Bắt đầu lắng nghe các event từ RabbitMQ và gRPC (Không block luồng HTTP)
  await app.startAllMicroservices();
  console.log('🐰 Notification Service (RabbitMQ) is listening to "email_queue"');
  console.log(`🔌 Notification Service (gRPC) is running on port: ${envConfig.GRPC_NOTIFICATION_PORT}`);

  // 6. Mở port chạy server HTTP
  const PORT = envConfig.NOTIFICATION_PORT;
  await app.listen(PORT);
  console.log(`🚀 Notification Service (HTTP) is running on port: ${PORT}`);
}

void bootstrap();
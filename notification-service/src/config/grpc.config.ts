import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { envConfig } from './env.config';

export const getGrpcConfig = (): MicroserviceOptions => ({
    transport: Transport.GRPC,
    options: {
        package: 'event', // Phải khớp với 'package' khai báo trong file notification.proto
        protoPath: join(__dirname, '../_shared/proto/event/notification_event.proto'),
        url: `0.0.0.0:${envConfig.NOTIFICATION_GRPC_PORT}`,
    },
});
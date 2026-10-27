import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { envConfig } from './env.config';

export const getGrpcConfig = (): MicroserviceOptions => ({
    transport: Transport.GRPC,
    options: {
        package: 'event',
        protoPath: join(__dirname, '../..//../_shared/proto/event/notification_event.proto'),
        // 🌟 Lấy đúng biến GRPC_NOTIFICATION_PORT
        url: `0.0.0.0:${envConfig.GRPC_NOTIFICATION_PORT}`,
    },
});
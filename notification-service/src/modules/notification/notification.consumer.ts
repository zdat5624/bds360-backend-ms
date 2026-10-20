import { event } from '@/generated/proto';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationType } from './entity/notification.entity';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationConsumer {
    private readonly logger = new Logger(NotificationConsumer.name);

    constructor(private readonly notificationService: NotificationService) { }

    @EventPattern('send_post_notification')
    async handlePostNotificationEvent(data: Buffer): Promise<void> {
        try {
            // 1. Decode byte array Protobuf
            const decodedData = event.PostNotificationEvent.decode(data);
            const userIdStr = String(decodedData.userId);

            this.logger.log(
                `[NotificationConsumer] Received PostNotificationEvent for userId: ${userIdStr}`,
            );

            // 2. Định dạng lại nội dung thông báo
            const fullMessage = decodedData.title
                ? `${decodedData.title}: ${decodedData.message}`
                : decodedData.message;

            // 3. Map chuỗi string từ Protobuf sang Enum NotificationType
            const type =
                decodedData.notificationType === 'SYSTEM_ALERT'
                    ? NotificationType.SYSTEM_ALERT
                    : NotificationType.POST;

            await this.notificationService.createNotification(
                Number(decodedData.userId),
                fullMessage,
                type,
            );

            this.logger.log(
                `[NotificationConsumer] Successfully processed notification for userId: ${userIdStr}`,
            );
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : String(error);
            this.logger.error(
                `[NotificationConsumer] Error processing PostNotificationEvent: ${errorMessage}`,
            );
        }
    }
}
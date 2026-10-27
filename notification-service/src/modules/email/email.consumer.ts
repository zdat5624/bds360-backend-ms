// --- File: src/modules/email/email.consumer.ts ---
import { event } from '@/generated/proto';
import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, RmqContext } from '@nestjs/microservices';
import { ConsumeMessage } from 'amqplib';
import { EmailService } from './email.service';

@Controller()
export class EmailConsumer {
    private readonly logger = new Logger(EmailConsumer.name);

    constructor(private readonly emailService: EmailService) { }

    @EventPattern('send_deposit_success_email')
    async handleDepositSuccessEvent(@Ctx() context: RmqContext): Promise<void> {
        try {
            // Lấy trực tiếp Buffer gốc từ RabbitMQ message
            const originalMessage = context.getMessage() as ConsumeMessage;
            const rawBuffer: Buffer = originalMessage.content;

            const decodedData = event.DepositSuccessEvent.decode(rawBuffer);

            this.logger.log(`[EmailConsumer] Received DepositSuccessEvent for: ${decodedData.username}`);

            await this.emailService.sendDepositSuccessEmail(
                decodedData.to,
                decodedData.username,
                decodedData.amount,
                decodedData.transactionTime,
            );

            this.logger.log(`[EmailConsumer] Successfully processed email for: ${decodedData.to}`);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            this.logger.error(`[EmailConsumer] Error processing event: ${errorMessage}`);
        }
    }

    @EventPattern('send_forgot_password_email')
    async handleForgotPasswordEvent(@Ctx() context: RmqContext): Promise<void> {
        try {
            // 🌟 Lấy trực tiếp Buffer nhị phân gốc từ amqplib
            const originalMessage = context.getMessage() as ConsumeMessage;
            const rawBuffer: Buffer = originalMessage.content;

            // Giải mã byte array từ Protobuf
            const decodedData = event.ForgotPasswordEvent.decode(rawBuffer);

            this.logger.log(`[EmailConsumer] Received ForgotPasswordEvent for: ${decodedData.username}`);

            // Gọi hàm thực thi gửi email đã có sẵn
            await this.emailService.sendForgotPasswordEmail(
                decodedData.to,
                decodedData.username,
                decodedData.resetCode,
            );

            this.logger.log(`[EmailConsumer] Successfully processed forgot password email for: ${decodedData.to}`);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            this.logger.error(`[EmailConsumer] Error processing ForgotPasswordEvent: ${errorMessage}`);
        }
    }
}
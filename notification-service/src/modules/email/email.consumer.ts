// File: src/modules/email/email.consumer.ts
import { event } from '@/generated/proto';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailService } from './email.service';

@Controller()
export class EmailConsumer {
    private readonly logger = new Logger(EmailConsumer.name);

    constructor(private readonly emailService: EmailService) { }

    @EventPattern('send_deposit_success_email')
    async handleDepositSuccessEvent(data: Buffer): Promise<void> {
        try {

            const decodedData = event.DepositSuccessEvent.decode(data);

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
    async handleForgotPasswordEvent(data: Buffer): Promise<void> {
        try {
            // Giải mã byte array từ Protobuf
            const decodedData = event.ForgotPasswordEvent.decode(data);

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
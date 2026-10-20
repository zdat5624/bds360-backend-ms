import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationSeeder } from 'src/bootstrap/notification-seeder.service';
import { Notification } from './entity/notification.entity';
import { NotificationConsumer } from './notification.consumer';
import { NotificationController } from './notification.controller';
import { NotificationGateway } from './notification.gateway';
import { NotificationRepository } from './notification.repository';
import { NotificationService } from './notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationController, NotificationConsumer],
  providers: [NotificationService, NotificationGateway, NotificationSeeder, NotificationRepository,],
  exports: [NotificationService],
})
export class NotificationModule { }
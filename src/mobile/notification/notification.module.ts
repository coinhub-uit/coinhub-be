import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';
import { Notification } from 'src/mobile/notification/entities/notification.entity';

@Module({
  imports: [Notification],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}

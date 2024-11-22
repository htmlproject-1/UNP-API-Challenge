import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Post('/send')
  send(@Body() notificationData: any) {
    return this.notificationsService.send(notificationData);
  }
}
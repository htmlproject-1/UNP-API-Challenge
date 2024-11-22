import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesModule } from './modules/preferences/preferences.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    PreferencesModule,
    NotificationsModule,
  ],
})
export class AppModule {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: Object,
    required: true,
    validate: {
      validator: (value) => typeof value === 'object',
      message: 'Invalid preferences object',
    },
  })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: { email: boolean; sms: boolean; push: boolean };
  };

  @Prop({ required: true })
  timezone: string;

  @Prop()
  lastUpdated: Date;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
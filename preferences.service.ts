import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './preferences.schema';
import { CreatePreferenceDto } from './preferences.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userModel: Model<UserPreference>,
  ) {}

  async create(createPreferenceDto: CreatePreferenceDto): Promise<UserPreference> {
    return new this.userModel(createPreferenceDto).save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    const user = await this.userModel.findOne({ userId });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(userId: string, updateData: Partial<CreatePreferenceDto>) {
    const user = await this.userModel.findOneAndUpdate(
      { userId },
      updateData,
      { new: true },
    );
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async delete(userId: string): Promise<void> {
    await this.userModel.findOneAndDelete({ userId });
  }
}
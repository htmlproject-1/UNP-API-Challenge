import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { CreatePreferenceDto } from './preferences.dto';

@Controller('preferences')
export class PreferencesController {
  constructor(private preferencesService: PreferencesService) {}

  @Post()
  create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.create(createPreferenceDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateData: Partial<CreatePreferenceDto>) {
    return this.preferencesService.update(userId, updateData);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.preferencesService.delete(userId);
  }
}
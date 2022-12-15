import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Controller('futbol/channels')
export class ChannelController {
  constructor(private readonly _channelService: ChannelService) {}

  @Post()
  create(@Body() createChannelDto: CreateChannelDto) {
    return this._channelService.create(createChannelDto);
  }

  @Get()
  findAll() {
    return this._channelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._channelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelDto: UpdateChannelDto) {
    return this._channelService.update(+id, updateChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._channelService.remove(+id);
  }

  @Get('test')
  test() {
    return this._channelService.extractChannels();
  }
}

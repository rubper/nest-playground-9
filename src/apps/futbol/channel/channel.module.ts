import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';

@Module({
  imports: [HttpModule],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}

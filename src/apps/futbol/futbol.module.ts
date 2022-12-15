import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel.module';

export const ModuleName = 'futbol';
@Module({
  imports: [ChannelModule],
  exports: [ChannelModule],
})
export class FutbolModule {}

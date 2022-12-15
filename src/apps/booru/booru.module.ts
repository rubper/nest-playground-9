import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { R34Module } from './r34/r34.module';

export const ModuleName = 'booru';

@Module({
  imports: [R34Module, HttpModule],
  providers: [],
})
export class BooruModule {}

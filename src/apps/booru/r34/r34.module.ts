import { Module } from '@nestjs/common';
import { R34Service } from './r34.service';
import { R34Controller } from './r34.controller';

@Module({
  controllers: [R34Controller],
  providers: [R34Service],
})
export class R34Module {}

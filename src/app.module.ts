import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

import { CoreModule } from './core/core.module';
import { BooruModule } from './apps/booru/booru.module';
import { SmashModule } from './apps/smash/smash.module';
import { FutbolModule } from './apps/futbol/futbol.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // system
    CoreModule,
    // apps
    BooruModule,
    FutbolModule,
    SmashModule,

    // nest
    HttpModule,
    ScheduleModule.forRoot(),
    // db connections
    TypeOrmModule.forRoot(),
    // typeormModuleFactory(),
    // ...ModulesList.map(
    //   (moduleName: string) => typeormModuleFactory(moduleName),
    // )
  ],
})
export class AppModule {}

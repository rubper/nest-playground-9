import { Module } from '@nestjs/common';

import { SyncService } from '@smash/services/sync/sync.service';
import { SmashService } from '@smash/services/smash/smash.service';
import { SmashController } from '@smash/controllers/smash.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './models/character.model';
import { Match } from './models/match.model';
import { Player } from './models/player.model';
import { Stage } from './models/stage.model';
import { TournamentPhase } from './models/tournament-phase.model';
import { Tournament } from './models/tournament.model';
import { CharacterService } from './services/character/character.service';
import { CharacterRepository } from './repositiories/character.repository';

export const ModuleName = 'smash';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature(
      [Character, Match, Player, Stage, TournamentPhase, Tournament],
      ModuleName,
    ),
  ],
  controllers: [SmashController],
  providers: [SyncService, SmashService, CharacterService, CharacterRepository],
  exports: [TypeOrmModule],
})
export class SmashModule {}

import { OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

import { Match } from './match.entity';
import { Channel } from './channel.entity';
import { UUID } from 'src/shared/types/uuid.type';

export class MatchChannel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @OneToMany(() => Match, (match: Match) => match.channels)
  match: Match;

  @OneToMany(() => Channel, (channel: Channel) => channel.matches)
  channel: Channel;
}

import { Column, ManyToOne, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

import { UUID } from 'src/shared/types/uuid.type';
import { MatchChannel } from './match-channel.entity';

export class Match extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @ManyToOne(
    () => MatchChannel,
    (matchChannel: MatchChannel) => matchChannel.match,
  )
  channels: MatchChannel[];

  @Column({ type: 'text', nullable: true })
  firstTeam: string;

  @Column({ type: 'varchar', length: 750 })
  secondTeam: string;

  @Column({ type: 'boolean', default: false })
  isSocket: boolean;
}

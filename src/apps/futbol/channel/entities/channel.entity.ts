import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UUID } from 'src/shared/types/uuid.type';
import { MatchChannel } from './match-channel.entity';

export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 750 })
  resourceEndpoint: string;

  @Column({ type: 'boolean', default: false })
  isSocket: boolean;

  @ManyToOne(
    () => MatchChannel,
    (matchChannel: MatchChannel) => matchChannel.channel,
  )
  matches: MatchChannel[];
}

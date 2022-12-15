import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { Participant } from 'brackets-model';

import { Match } from './match.model';
import { Character } from './character.model';
import { Tournament } from './tournament.model';
import { passwordTransformer } from './transformers/password.transformer';
import { participantTransformer } from './transformers/participant.transformer';

export interface PlayerDTO {
  username: string;
  password: string;
  id?: string;
  preferredMain?: Character;
  preferredAlt?: Character;
}

// user class
@Entity()
export class Player extends BaseEntity {
  constructor(playerData: PlayerDTO) {
    super();
    this.wins = 0;
    this.loses = 0;
    if (playerData) {
      this.username = playerData.username;
      this.password = playerData.password;
      if (playerData.id) {
        this.id = playerData.id;
      }
      if (playerData.preferredMain) {
        this.preferredMain = playerData.preferredMain;
      }
      if (playerData.preferredAlt) {
        this.preferredAlt = playerData.preferredAlt;
      }
    }
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Column()
  username: string;
  @Column()
  @IsEmail()
  email: string;
  @Column({
    select: false,
    transformer: passwordTransformer,
  })
  password: string;
  @Column()
  wins: number;
  @Column()
  loses: number;
  // smash optional data
  @ManyToOne(() => Character, { nullable: true })
  preferredMain?: Character;
  @ManyToOne(() => Character, { nullable: true })
  preferredAlt?: Character;
  @ManyToMany(() => Match, (match) => match.contestants, { nullable: true })
  matches?: Match[];
  @ManyToMany(() => Tournament, (tournament) => tournament.players, {
    nullable: true,
  })
  tournaments?: Tournament[];
  @Column('text', {
    nullable: true,
    name: 'external_data',
    transformer: participantTransformer,
  })
  externalData?: Participant;
}

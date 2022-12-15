import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  ManyToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Player } from './player.model';
import { Tournament } from './tournament.model';
import { ScoreTransformer } from './transformers/score.transformer';
import { defaultStringToNumberArray } from 'src/shared/helpers/array-string-converter';

@Entity()
export class Match extends BaseEntity {
  constructor(matchData: any) {
    super();
    this.scores = [];
    if (matchData) {
      if (matchData.id) {
        this.id = matchData;
      }
      if (matchData.externalId) {
        this.externalId = matchData.externalId;
      }
      if (matchData.orderNumber) {
        this.orderNumber = matchData.orderNumber;
      }
      if (matchData.scores) {
        if (typeof matchData.scores === 'string') {
          this.scores = defaultStringToNumberArray(matchData.scores);
        }
        if (matchData.scores.length) {
          this.scores = matchData.scores;
        }
      }
    }
  }
  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Generated('increment')
  externalId: number;
  @Column('text', { transformer: ScoreTransformer })
  scores: number[];
  @Column('int', { name: 'order_number' })
  orderNumber: number;
  @ManyToOne(() => Tournament, (tournament) => tournament.matches)
  tournament?: Tournament;
  @ManyToMany(() => Player)
  contestants?: Player[];

  get firstPlayerScore() {
    return this.scores[0];
  }
  get secondPlayerScore() {
    return this.scores[1];
  }
}

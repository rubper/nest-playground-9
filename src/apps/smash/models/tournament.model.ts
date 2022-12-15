import {
  Column,
  Entity,
  OneToMany,
  BaseEntity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Stage } from './stage.model';
import { Match } from './match.model';
import { Player } from './player.model';
import { TournamentPhase } from './tournament-phase.model';

export interface TournamentDTO {
  name: string;
  startDate: string;
  endDate: string;
  id?: string;
}

// tournament class
@Entity()
export class Tournament extends BaseEntity {
  constructor(tournamentData: TournamentDTO) {
    super();
    if (tournamentData) {
      this.name = tournamentData.name;
      this.startDate = new Date(tournamentData.startDate);
      this.endDate = new Date(tournamentData.endDate);
      if (tournamentData.id) {
        this.id = tournamentData.id;
      }
    }
  }
  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Column()
  name: string;
  @Column('date', { name: 'start_date' })
  startDate: Date;
  @Column('date', { name: 'end_date' })
  endDate: Date;
  @Column('int', { name: 'match_contestants' })
  matchContestants: number;
  @ManyToMany(() => Player)
  players?: Player[];
  @OneToMany(() => Match, (match) => match.tournament)
  matches?: Match[];
  @ManyToMany(() => Stage)
  allowedMaps?: Stage[];
  @OneToMany(() => TournamentPhase, (phase) => phase.tournament)
  phases?: TournamentPhase[];
}

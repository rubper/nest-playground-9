import {
  StageType,
  RoundRobinMode,
  GrandFinalType,
  Stage as BracketsStage,
} from 'brackets-model';
import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Player } from './player.model';
import { Tournament } from './tournament.model';
import { ObjectToStringTransformer } from './transformers/object.transformer';

export interface PhaseDTO {
  id: string;
  rawData: BracketsStage;
}

@Entity()
export class TournamentPhase extends BaseEntity {
  constructor(phaseData?: BracketsStage | PhaseDTO) {
    super();
    this.maxParticipants = -1;
    if (phaseData) {
      if (typeof phaseData === 'string') {
        phaseData = phaseData as PhaseDTO;
        this.id = phaseData.id;
        this.rawPhase = phaseData.rawData;
        this.externalId = phaseData.rawData.id;
        this.phaseType = phaseData.rawData.type;
        this.displayName = phaseData.rawData.name;
        this.orderNumber = phaseData.rawData.number;
        if (phaseData.rawData.settings) {
          this.maxParticipants = phaseData.rawData.settings.size;
          this.finalsType = phaseData.rawData.settings.grandFinal;
          this.roundRobinMode = phaseData.rawData.settings.roundRobinMode;
        }
      } else {
        phaseData = phaseData as BracketsStage;
        this.rawPhase = phaseData;
        this.externalId = phaseData.id;
        this.phaseType = phaseData.type;
        this.displayName = phaseData.name;
        this.orderNumber = phaseData.number;
        if (phaseData.settings) {
          this.maxParticipants = phaseData.settings.size;
          this.finalsType = phaseData.settings.grandFinal;
          this.roundRobinMode = phaseData.settings.roundRobinMode;
        }
      }
    }
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Column({ name: 'display_name' })
  displayName: string;
  @Column('text', { name: 'phase_type' })
  phaseType: StageType;
  @Column('int', { name: 'external_id' })
  externalId: number;
  @ManyToOne(() => Tournament)
  tournament?: Tournament;
  @Column('int', { name: 'order_number' })
  orderNumber: number;
  @Column({ name: 'round_robin_mode', nullable: true })
  roundRobinMode?: RoundRobinMode;
  @Column({ name: 'finals_type', nullable: true })
  finalsType?: GrandFinalType;
  @ManyToMany(() => Player)
  activePlayers?: Player[];
  @Column('int', { name: 'max_participants' })
  maxParticipants: number;
  @Column('text', {
    name: 'raw_phase',
    transformer: ObjectToStringTransformer,
  })
  rawPhase: BracketsStage;
}

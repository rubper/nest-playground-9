import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FranchisesList, StagesList } from '@smash/constants/stages.const';

@Entity()
export class Stage extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Column({ enum: StagesList })
  name: StagesList;
  @Column({ enum: FranchisesList })
  franchise: FranchisesList;
  @Column('boolean', { name: 'is_legal' })
  isLegal: boolean;
}

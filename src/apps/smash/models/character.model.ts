import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import {
  CharacterList,
  getLongestNameLength,
} from '@smash/constants/characters.const';
import {
  Availability,
  GameCharacter,
} from '@smash/interfaces/game.character.interface';
import { ObjectToStringTransformer } from './transformers/object.transformer';

// character class
@Entity()
export class Character {
  constructor(rawValue?: GameCharacter) {
    if (rawValue) {
      this.fromRaw(rawValue);
    }
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;
  @Column({ name: 'external_id' })
  externalId: number;
  @Column()
  name: string;
  @Column({ name: 'icon_url' })
  iconUrl: string;
  @Column({ name: 'card_url' })
  cardUrl: string;
  @Column()
  availability: Availability;
  @Column()
  universe: string;
  @Column({ name: 'universe_icon' })
  universeIcon: string;
  @Column({
    type: 'text',
    transformer: ObjectToStringTransformer,
  })
  rawObject: GameCharacter;
  @Column('varchar', {
    length: getLongestNameLength() + 1,
  })
  internalName: CharacterList;

  fromRaw(data: GameCharacter) {
    this.rawObject = data;
    this.externalId = +data.order;
    this.name = data.name;
    this.iconUrl = data.images.icon;
    this.cardUrl = data.images.portrait;
    this.availability = data.availability;
    this.universe = data.series.name;
    this.universeIcon = data.series.icon;
  }
}

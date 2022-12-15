import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, SaveOptions } from 'typeorm';

import { Character } from '@smash/models/character.model';
import { CharacterRepository } from '@smash/repositiories/character.repository';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterRepository)
    private readonly _characterRepository: CharacterRepository,
  ) {}

  findOneBy(
    where: FindOptionsWhere<Character> | FindOptionsWhere<Character>[],
  ) {
    return this._characterRepository.findOneBy(where);
  }
  save(
    entities: Partial<Character>,
    options?: SaveOptions & { reload: false },
  ) {
    return this._characterRepository.save(entities, options);
  }
}

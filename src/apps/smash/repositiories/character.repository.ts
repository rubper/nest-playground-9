import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { Character } from '@smash/models/character.model';
import { ModuleName } from '@smash/smash.module';

@Injectable()
export class CharacterRepository extends Repository<Character> {
  constructor(
    @InjectDataSource(ModuleName)
    private readonly _dataSource: DataSource,
  ) {
    const runner = _dataSource.createQueryRunner();
    super(Character, _dataSource.createEntityManager(runner), runner);
    (this as any)['metadata'] = _dataSource.getMetadata(Character);
  }
}

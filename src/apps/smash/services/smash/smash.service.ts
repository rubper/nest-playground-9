import { Injectable } from '@nestjs/common';

import { CreateSmashDto } from '@smash/dto/create-smash.dto';
import { UpdateSmashDto } from '@smash/dto/update-smash.dto';

@Injectable()
export class SmashService {
  create(createSmashDto: CreateSmashDto) {
    return 'This action adds a new smash';
  }

  findAll() {
    return `This action returns all smash`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smash`;
  }

  update(id: number, updateSmashDto: UpdateSmashDto) {
    return `This action updates a #${id} smash`;
  }

  remove(id: number) {
    return `This action removes a #${id} smash`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateR34Dto } from '../dto/create-r34.dto';
import { UpdateR34Dto } from '../dto/update-r34.dto';

@Injectable()
export class R34Service {
  create(createR34Dto: CreateR34Dto) {
    return 'This action adds a new r34';
  }

  findAll() {
    return `This action returns all r34`;
  }

  findOne(id: number) {
    return `This action returns a #${id} r34`;
  }

  update(id: number, updateR34Dto: UpdateR34Dto) {
    return `This action updates a #${id} r34`;
  }

  remove(id: number) {
    return `This action removes a #${id} r34`;
  }
}

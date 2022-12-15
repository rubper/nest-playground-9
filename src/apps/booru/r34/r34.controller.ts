import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { R34Service } from './r34.service';
import { CreateR34Dto } from '../dto/create-r34.dto';
import { UpdateR34Dto } from '../dto/update-r34.dto';

@Controller('booru/r34')
export class R34Controller {
  constructor(private readonly r34Service: R34Service) {}

  @Post()
  create(@Body() createR34Dto: CreateR34Dto) {
    return this.r34Service.create(createR34Dto);
  }

  @Get()
  findAll() {
    return this.r34Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.r34Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateR34Dto: UpdateR34Dto) {
    return this.r34Service.update(+id, updateR34Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.r34Service.remove(+id);
  }
}

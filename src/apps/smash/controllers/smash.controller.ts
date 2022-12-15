import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { CreateSmashDto } from '@smash/dto/create-smash.dto';
import { UpdateSmashDto } from '@smash/dto/update-smash.dto';
import { SmashService } from '@smash/services/smash/smash.service';

@Controller('smash')
export class SmashController {
  constructor(private readonly smashService: SmashService) {}

  @Post()
  create(@Body() createSmashDto: CreateSmashDto) {
    return this.smashService.create(createSmashDto);
  }

  @Get()
  findAll() {
    return this.smashService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smashService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmashDto: UpdateSmashDto) {
    return this.smashService.update(+id, updateSmashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smashService.remove(+id);
  }
}

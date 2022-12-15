import { PartialType } from '@nestjs/mapped-types';
import { CreateSmashDto } from './create-smash.dto';

export class UpdateSmashDto extends PartialType(CreateSmashDto) {}

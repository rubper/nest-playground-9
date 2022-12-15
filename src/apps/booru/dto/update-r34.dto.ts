import { PartialType } from '@nestjs/mapped-types';
import { CreateR34Dto } from './create-r34.dto';

export class UpdateR34Dto extends PartialType(CreateR34Dto) {}

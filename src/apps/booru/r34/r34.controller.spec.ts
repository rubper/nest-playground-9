import { Test, TestingModule } from '@nestjs/testing';
import { R34Controller } from './r34.controller';
import { R34Service } from './r34.service';

describe('R34Controller', () => {
  let controller: R34Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [R34Controller],
      providers: [R34Service],
    }).compile();

    controller = module.get<R34Controller>(R34Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

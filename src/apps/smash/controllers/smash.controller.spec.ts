import { Test, TestingModule } from '@nestjs/testing';

import { SmashController } from './smash.controller';
import { SmashService } from '@smash/services/smash/smash.service';

describe('SmashController', () => {
  let controller: SmashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmashController],
      providers: [SmashService],
    }).compile();

    controller = module.get<SmashController>(SmashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

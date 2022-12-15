import { Test, TestingModule } from '@nestjs/testing';
import { SmashService } from './smash.service';

describe('SmashService', () => {
  let service: SmashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmashService],
    }).compile();

    service = module.get<SmashService>(SmashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { R34Service } from './r34.service';

describe('R34Service', () => {
  let service: R34Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [R34Service],
    }).compile();

    service = module.get<R34Service>(R34Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

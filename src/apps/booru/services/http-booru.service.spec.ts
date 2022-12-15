import { Test, TestingModule } from '@nestjs/testing';
import { HttpBooru } from './http-booru.service';

describe('HttpBooru', () => {
  let service: HttpBooru;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpBooru],
    }).compile();

    service = module.get<HttpBooru>(HttpBooru);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

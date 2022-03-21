import { Test, TestingModule } from '@nestjs/testing';
import { HealthrelatedqualityoflifeService } from './healthrelatedqualityoflife.service';

describe('HealthrelatedqualityoflifeService', () => {
  let service: HealthrelatedqualityoflifeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthrelatedqualityoflifeService],
    }).compile();

    service = module.get<HealthrelatedqualityoflifeService>(HealthrelatedqualityoflifeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

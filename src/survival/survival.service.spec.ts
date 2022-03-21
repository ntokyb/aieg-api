import { Test, TestingModule } from '@nestjs/testing';
import { SurvivalService } from './survival.service';

describe('SurvivalService', () => {
  let service: SurvivalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurvivalService],
    }).compile();

    service = module.get<SurvivalService>(SurvivalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HealthcareutilizationService } from './healthcareutilization.service';

describe('HealthcareutilizationService', () => {
  let service: HealthcareutilizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcareutilizationService],
    }).compile();

    service = module.get<HealthcareutilizationService>(HealthcareutilizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

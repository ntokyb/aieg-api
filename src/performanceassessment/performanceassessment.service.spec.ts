import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceassessmentService } from './performanceassessment.service';

describe('PerformanceassessmentService', () => {
  let service: PerformanceassessmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceassessmentService],
    }).compile();

    service = module.get<PerformanceassessmentService>(PerformanceassessmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

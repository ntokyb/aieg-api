import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceassessmentController } from './performanceassessment.controller';

describe('PerformanceassessmentController', () => {
  let controller: PerformanceassessmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceassessmentController],
    }).compile();

    controller = module.get<PerformanceassessmentController>(PerformanceassessmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

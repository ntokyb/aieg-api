import { Test, TestingModule } from '@nestjs/testing';
import { HealthcareutilizationController } from './healthcareutilization.controller';

describe('HealthcareutilizationController', () => {
  let controller: HealthcareutilizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthcareutilizationController],
    }).compile();

    controller = module.get<HealthcareutilizationController>(HealthcareutilizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

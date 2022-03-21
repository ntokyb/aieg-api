import { Test, TestingModule } from '@nestjs/testing';
import { SurvivalController } from './survival.controller';

describe('SurvivalController', () => {
  let controller: SurvivalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurvivalController],
    }).compile();

    controller = module.get<SurvivalController>(SurvivalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HealthrelatedqualityoflifeController } from './healthrelatedqualityoflife.controller';

describe('HealthrelatedqualityoflifeController', () => {
  let controller: HealthrelatedqualityoflifeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthrelatedqualityoflifeController],
    }).compile();

    controller = module.get<HealthrelatedqualityoflifeController>(HealthrelatedqualityoflifeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

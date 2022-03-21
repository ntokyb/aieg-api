import { Test, TestingModule } from '@nestjs/testing';
import { EncounterinformationController } from './encounterinformation.controller';

describe('EncounterinformationController', () => {
  let controller: EncounterinformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncounterinformationController],
    }).compile();

    controller = module.get<EncounterinformationController>(EncounterinformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

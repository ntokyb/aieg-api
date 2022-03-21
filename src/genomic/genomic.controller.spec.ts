import { Test, TestingModule } from '@nestjs/testing';
import { GenomicController } from './genomic.controller';

describe('GenomicController', () => {
  let controller: GenomicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenomicController],
    }).compile();

    controller = module.get<GenomicController>(GenomicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

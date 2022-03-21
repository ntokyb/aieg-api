import { Test, TestingModule } from '@nestjs/testing';
import { SamplecollectionController } from './samplecollection.controller';

describe('SamplecollectionController', () => {
  let controller: SamplecollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamplecollectionController],
    }).compile();

    controller = module.get<SamplecollectionController>(SamplecollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

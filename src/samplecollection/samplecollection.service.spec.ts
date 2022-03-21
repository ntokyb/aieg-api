import { Test, TestingModule } from '@nestjs/testing';
import { SamplecollectionService } from './samplecollection.service';

describe('SamplecollectionService', () => {
  let service: SamplecollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamplecollectionService],
    }).compile();

    service = module.get<SamplecollectionService>(SamplecollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

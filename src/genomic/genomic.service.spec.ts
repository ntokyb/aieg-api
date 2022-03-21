import { Test, TestingModule } from '@nestjs/testing';
import { GenomicService } from './genomic.service';

describe('GenomicService', () => {
  let service: GenomicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenomicService],
    }).compile();

    service = module.get<GenomicService>(GenomicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

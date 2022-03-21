import { Test, TestingModule } from '@nestjs/testing';
import { EncounterinformationService } from './encounterinformation.service';

describe('EncounterinformationService', () => {
  let service: EncounterinformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncounterinformationService],
    }).compile();

    service = module.get<EncounterinformationService>(EncounterinformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

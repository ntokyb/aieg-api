import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisprocedureService } from './diagnosisprocedure.service';

describe('DiagnosisprocedureService', () => {
  let service: DiagnosisprocedureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosisprocedureService],
    }).compile();

    service = module.get<DiagnosisprocedureService>(DiagnosisprocedureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

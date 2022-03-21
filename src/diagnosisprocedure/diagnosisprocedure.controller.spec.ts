import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisprocedureController } from './diagnosisprocedure.controller';

describe('DiagnosisprocedureController', () => {
  let controller: DiagnosisprocedureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosisprocedureController],
    }).compile();

    controller = module.get<DiagnosisprocedureController>(DiagnosisprocedureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

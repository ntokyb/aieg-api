import { Test, TestingModule } from '@nestjs/testing';
import { PatientInformationController } from './patient-information.controller';

describe('PatientInformationController', () => {
  let controller: PatientInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientInformationController],
    }).compile();

    controller = module.get<PatientInformationController>(PatientInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

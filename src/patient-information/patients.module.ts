import { Module } from '@nestjs/common';
import { PatientInformationController } from './patient-information.controller';
import { PatientsService } from './patients.service';

@Module({
    controllers: [PatientInformationController],
    providers: [PatientsService],
    exports: [PatientsService]
})
export class PatientsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from '../patients/patient.entity';
import { PatientInformationController } from './patient-information.controller';
import { PatientsService } from './patients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [PatientInformationController],
  providers: [PatientsService],
  exports: [PatientsService],
})
export class PatientsModule {}

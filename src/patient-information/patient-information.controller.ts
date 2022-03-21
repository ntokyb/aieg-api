import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Patient } from '../patients/patient.entity';
import { CreatePatientDto } from './patient-dto/create-patient.dto';

import { PatientsService } from './patients.service';

@Controller('patient-information')
export class PatientInformationController {
  constructor(private patientService: PatientsService) {}

  @Get()
  getAllPatients(): Observable<Patient[]> {
    return of([]);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Post()
  @UseFilters()
  async createPatient(@Body() createPatientDto: CreatePatientDto) {
    throw new ForbiddenException();
  }
}

import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreatePatientDto } from './patient-dto/create-patient.dto';
import { Patient } from './patient-interface/patient-interface';
import { PatientsService } from './patients.service';

@Controller('patient-information')
export class PatientInformationController {

    constructor (private patientService: PatientsService){}

    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This gets all patients information.{limit: $query.limit} patients)`;
    // }

    @Post()
    async create(@Body() createPatientDto: CreatePatientDto){
        this.patientService.create(createPatientDto)
    }

    @Get()
    async findAll(): Promise<Patient[]> {
        return this.patientService.findAll();
    }
}

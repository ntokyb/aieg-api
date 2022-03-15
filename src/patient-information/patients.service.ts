import { Injectable } from '@nestjs/common';
import { Patient } from './patient-interface/patient-interface'

@Injectable()
export class PatientsService {
    private readonly patients: Patient[] = [];

    create(patient: Patient) {
        this.patients.push(patient)
    }

    findAll(): Patient[] {
        return this.patients;
    }

}

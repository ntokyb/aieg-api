import { Observable } from 'rxjs';
import { Patient } from '../patients/patient.entity';
import { CreatePatientDto } from './patient-dto/create-patient.dto';
import { PatientsService } from './patients.service';
export declare class PatientInformationController {
    private patientService;
    constructor(patientService: PatientsService);
    getAllPatients(): Observable<Patient[]>;
    createPatient(createPatientDto: CreatePatientDto): Promise<void>;
}

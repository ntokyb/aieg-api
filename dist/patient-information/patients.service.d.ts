import { Repository } from 'typeorm';
import { Patient } from '../patients/patient.entity';
export declare class PatientsService {
    private patientRepository;
    constructor(patientRepository: Repository<Patient>);
    getAllPatients(): Promise<Patient[]>;
    findPatient(id: number): Promise<Patient>;
    removePatient(id: number): Promise<void>;
}

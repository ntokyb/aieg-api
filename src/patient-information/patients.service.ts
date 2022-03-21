import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findPatient(id: number): Promise<Patient> {
    return this.patientRepository.findOne(id);
  }

  async removePatient(id: number): Promise<void> {
    await this.patientRepository.findOne(id);
  }
}

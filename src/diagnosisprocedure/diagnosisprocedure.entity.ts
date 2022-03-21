import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiagnosisProcedure {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column('datetime')
  DateCreated: Date;

  @Column('datetime')
  DateModified: Date;

  @Column('bit')
  Deleted: number;

  @Column('bit')
  Active: number;

  @Column('datetime')
  DateOfInitialDiagnosis: Date;

  @Column('nvarchar')
  Diagnosis: string;

  @Column('nvarchar')
  DiagnosisType: string;

  //CREATE A DIAGNOSIS STATUS TABLE
  @Column('nvarchar')
  DiagnosisStatus: string;

  //
  @Column('nvarchar')
  ProcedureCode: string;

  @Column('nvarchar')
  ProcedureDescription: string;

  @Column('datetime')
  DateOfProcedure: Date;

  //DO I CREATE A VISITING FRQUENCY TABLE?
  @Column('nvarchar')
  AssessmentVisitFrequency: string;
}

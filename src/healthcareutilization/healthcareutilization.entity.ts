import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HealthCareUtilization {
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
  DateOfVisit: Date;

  @Column('nvarchar')
  HospitalVisitType: string;

  @Column('nvarchar')
  HospitalizationReason: string;

  @Column('datetime')
  DateOfAdmission: Date;

  @Column('datetime')
  DateOfDischarge: Date;
}

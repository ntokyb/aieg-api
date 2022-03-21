import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MolecularPathologyLabs {
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

  @Column('nvarchar')
  LabBiomarkerTestName: string;

  @Column('datetime')
  DateLabTest: Date;

  @Column('datetime')
  DateResultLabTest: Date;

  @Column('nvarchar')
  SampleTypeCode: string;

  @Column('nvarchar')
  QualitativeObservationTest: string;
}

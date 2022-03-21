import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EncounterInformation {
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
  DateOfEncounter: Date;

  @Column('nvarchar')
  EncounterType: string;

  @Column('nvarchar')
  EncounterCode: string;

  @Column('nvarchar')
  InformedConsentSigned: string;
}

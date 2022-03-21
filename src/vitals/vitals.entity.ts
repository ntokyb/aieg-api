import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vitals {
  @PrimaryGeneratedColumn('increment')
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
  DateOfTest: Date;

  @Column('decimal')
  Height: number;

  @Column('decimal')
  Weight: number;

  @Column('decimal')
  BodyMassIndex: number;

  @Column('nvarchar')
  BloodPressure: string;

  @Column('nvarchar')
  PregnancyStatus: string;

  @Column('nvarchar')
  AlcoholConsumption: string;

  @Column('int')
  NumberOfSmokes: number;

  @Column('nvarchar')
  ExercisingStatus: string;

  @Column('decimal')
  IncomeLevel: number;

  //DO I CREATE A TABLE OF ALL KNOWN Comorbidities?
  @Column('nvarchar')
  Comorbidities: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Treatments {
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
  TreatmentAgent: string;

  @Column('nvarchar')
  TreatmentDrugCategory: string;

  @Column('datetime')
  DateTreamentStart: Date;

  @Column('money')
  AdminsteredAmount: number;

  @Column('nvarchar')
  AdministeredCycles: string;

  @Column('datetime')
  DateTreatmentEnd: Date;

  @Column('nvarchar')
  ReasonForDiscontinuation: string;
}

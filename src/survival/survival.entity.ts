import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Survival {
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
  DateOfDeath: Date;

  @Column('nvarchar')
  CauseOfDeath: string;

  @Column('datetime')
  DateOfLastContact: string;

  @Column('nvarchar')
  DiseaseStatusKnownFollowUp: string;

  @Column('nvarchar')
  SurvivalStatusKnownFollowUp: string;
}

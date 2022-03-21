import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerformanceAssessments {
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
  DateOfAssessment: Date;

  @Column('nvarchar')
  PerformanceAssessmentType: string;

  @Column('nvarchar')
  PerformanceAssessmentResult: string;
}

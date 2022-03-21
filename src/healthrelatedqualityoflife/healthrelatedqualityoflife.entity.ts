import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HealthRelatedQualityOfLife {
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
  QQLType: string;

  @Column('datetime')
  DateOfQQL: Date;

  @Column('decimal')
  QQLScore: number;
}

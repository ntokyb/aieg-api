import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SampleCollection {
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
  DateOfCollection: Date;

  @Column('nvarchar')
  SampleTypeCode: string;

  @Column('datetime')
  TimeSpecimenTaken: Date;

  @Column('datetime')
  TimeSpecimenInFreezer: Date;

  @Column('nvarchar')
  SpecimenCollectionSite: string;

  @Column('nvarchar')
  SampleDeliveredTo: string;
}

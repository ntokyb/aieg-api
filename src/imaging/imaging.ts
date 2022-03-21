import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Imaging {
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
  DateOfImageTest: Date;

  //DO I CREATE A TABLE FOR ALL TYPES OF IMAGE TESTS?
  @Column('nvarchar')
  TypeOfImageTest: string;

  @Column('decimal')
  ImagingMeasurementPerDisease: string;
}

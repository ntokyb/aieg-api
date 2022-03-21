import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genomic {
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
  Genotype: string;
}

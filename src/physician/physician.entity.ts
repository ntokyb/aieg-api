import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Physician {
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

  @Column()
  PrimaryPhysician: string;

  @Column()
  PracticeType: string;

  @Column()
  ProcedureProvider: string;

  @Column()
  PhysicianNotes: string;
}

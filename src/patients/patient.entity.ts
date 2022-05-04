import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/user.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column('datetime', { default: Date.now() })
  DateCreated: Date;

  @Column('datetime')
  DateModified: Date;

  @Column('bit', { default: 0 })
  Deleted: number;

  @Column('bit', { default: 1 })
  Active: number;

  @Column()
  IdNumber: string;

  @Column('datetime')
  DateOfBirth: Date;

  //We need to create the gender table
  @Column()
  Gender: string;

  //WE NEED TO CREATE A RACE TABLE
  @Column()
  Race: string;

  //WE NEED AN Ethnicity TABLE
  @Column()
  Ethnicity: string;

  @Column('varchar', { length: 500 })
  FamilyHistory: string;

  //IF THERE IS A LIST OF SITES ALREADT WE NEED TO HAVE THEM AND CREATE A TABLE FOR THEM
  @Column()
  CollectionSite: string;

  //IF THERE IS MORE THAN ONE COUNTRY WE NEED A COUNTRIES TABLE
  @Column()
  Country: string;

  @Column('datetime')
  DateOfAbstraction: Date;

  @OneToOne(() => Users)
  @JoinColumn()
  User: Users;
}

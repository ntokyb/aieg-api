import { IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  idNumber: string;

  @IsNotEmpty()
  dateOfBirth: Date;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  race: string;

  @IsNotEmpty()
  ethnicity: string;

  @IsNotEmpty()
  familyHistory: string;

  @IsNotEmpty()
  collectionSite: string;

  @IsNotEmpty()
  dateOfAbstraction: Date;
}

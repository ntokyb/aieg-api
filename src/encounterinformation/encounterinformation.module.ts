import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncounterinformationController } from './encounterinformation.controller';
import { EncounterInformation } from './encounterinformation.entity';
import { EncounterinformationService } from './encounterinformation.service';

@Module({
  imports: [TypeOrmModule.forFeature([EncounterInformation])],
  controllers: [EncounterinformationController],
  providers: [EncounterinformationService],
})
export class EncounterinformationModule {}

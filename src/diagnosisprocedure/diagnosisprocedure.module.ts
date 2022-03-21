import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiagnosisprocedureController } from './diagnosisprocedure.controller';
import { DiagnosisProcedure } from './diagnosisprocedure.entity';
import { DiagnosisProcedureService } from './diagnosisprocedure.service';

@Module({
  imports: [TypeOrmModule.forFeature([DiagnosisProcedure])],
  controllers: [DiagnosisprocedureController],
  providers: [DiagnosisProcedureService],
})
export class DiagnosisprocedureModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceassessmentController } from './performanceassessment.controller';
import { PerformanceAssessments } from './performanceassessment.entity';
import { PerformanceAssessmentService } from './performanceassessment.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerformanceAssessments])],
  controllers: [PerformanceassessmentController],
  providers: [PerformanceAssessmentService],
})
export class PerformanceassessmentModule {}

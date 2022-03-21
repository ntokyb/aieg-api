import { Module } from '@nestjs/common';
import { HealthcareUtilizationService } from './healthcareutilization.service';
import { HealthcareutilizationController } from './healthcareutilization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCareUtilization } from './healthcareutilization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthCareUtilization])],
  providers: [HealthcareUtilizationService],
  controllers: [HealthcareutilizationController],
})
export class HealthcareutilizationModule {}

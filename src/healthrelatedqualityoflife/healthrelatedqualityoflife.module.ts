import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthrelatedqualityoflifeController } from './healthrelatedqualityoflife.controller';
import { HealthRelatedQualityOfLife } from './healthrelatedqualityoflife.entity';
import { HealthRelatedQualityOfLifeService } from './healthrelatedqualityoflife.service';

@Module({
  imports: [TypeOrmModule.forFeature([HealthRelatedQualityOfLife])],
  controllers: [HealthrelatedqualityoflifeController],
  providers: [HealthRelatedQualityOfLifeService],
})
export class HealthrelatedqualityoflifeModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurvivalController } from './survival.controller';
import { Survival } from './survival.entity';
import { SurvivalService } from './survival.service';

@Module({
  imports: [TypeOrmModule.forFeature([Survival])],
  controllers: [SurvivalController],
  providers: [SurvivalService],
})
export class SurvivalModule {}

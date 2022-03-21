import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicianController } from './physician.controller';
import { Physician } from './physician.entity';
import { PhysicianService } from './physician.service';

@Module({
  imports: [TypeOrmModule.forFeature([Physician])],
  controllers: [PhysicianController],
  providers: [PhysicianService],
})
export class PhysicianModule {}

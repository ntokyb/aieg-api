import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Surgery } from './sugery.entity';
import { SurgeryController } from './surgery.controller';
import { SurgeryService } from './surgery.service';

@Module({
  imports: [TypeOrmModule.forFeature([Surgery])],
  controllers: [SurgeryController],
  providers: [SurgeryService],
})
export class SurgeryModule {}

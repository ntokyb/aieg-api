import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagingController } from './imaging.controller';
import { Imaging } from './imaging.entity';
import { ImagingService } from './imaging.service';

@Module({
  imports: [TypeOrmModule.forFeature([Imaging])],
  controllers: [ImagingController],
  providers: [ImagingService],
})
export class ImagingModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenomicController } from './genomic.controller';
import { Genomic } from './genomic.entity';
import { GenomicService } from './genomic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Genomic])],
  controllers: [GenomicController],
  providers: [GenomicService],
})
export class GenomicModule {}

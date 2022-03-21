import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SamplecollectionController } from './samplecollection.controller';
import { SampleCollection } from './samplecollection.entity';
import { SampleCollectionService } from './samplecollection.service';

@Module({
  imports: [TypeOrmModule.forFeature([SampleCollection])],
  controllers: [SamplecollectionController],
  providers: [SampleCollectionService],
})
export class SamplecollectionModule {}

import { Module } from '@nestjs/common';
import { VitalsController } from './vitals.controller';

@Module({
  controllers: [VitalsController]
})
export class VitalsModule {}

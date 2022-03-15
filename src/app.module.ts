import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patient-information/patients.module';

@Module({
  imports: [PatientsModule],
})
export class AppModule {}

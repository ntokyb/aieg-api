import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patients/patient.entity';
import { UsersService } from './users/users.service';
import { PatientsService } from './patients/patients.service';
import { VitalsService } from './vitals/vitals.service';
import { TreatmentsService } from './treatments/treatments.service';
import { SurvivalService } from './survival/survival.service';
import { SurgeryService } from './surgery/surgery.service';
import { SampleCollectionService } from './samplecollection/samplecollection.service';
import { PhysicianService } from './physician/physician.service';
import { PerformanceAssessmentService } from './performanceassessment/performanceassessment.service';
import { MolecularPathologylabsService } from './molecularpathologylabs/molecularpathologylabs.service';
import { ImagingService } from './imaging/imaging.service';
import { HealthRelatedQualityOfLifeService } from './healthrelatedqualityoflife/healthrelatedqualityoflife.service';
import { GenomicService } from './genomic/genomic.service';
import { EncounterinformationService } from './encounterinformation/encounterinformation.service';
import { DiagnosisProcedureService } from './diagnosisprocedure/diagnosisprocedure.service';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { VitalsModule } from './vitals/vitals.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { SurvivalModule } from './survival/survival.module';
import { SurgeryModule } from './surgery/surgery.module';
import { SamplecollectionModule } from './samplecollection/samplecollection.module';
import { PhysicianModule } from './physician/physician.module';
import { PerformanceassessmentModule } from './performanceassessment/performanceassessment.module';
import { MolecularpathologylabsModule } from './molecularpathologylabs/molecularpathologylabs.module';
import { ImagingModule } from './imaging/imaging.module';
import { HealthrelatedqualityoflifeModule } from './healthrelatedqualityoflife/healthrelatedqualityoflife.module';
import { HealthcareutilizationModule } from './healthcareutilization/healthcareutilization.module';
import { GenomicModule } from './genomic/genomic.module';
import { EncounterinformationModule } from './encounterinformation/encounterinformation.module';
import { DiagnosisprocedureModule } from './diagnosisprocedure/diagnosisprocedure.module';
import { ReportsModule } from './reports/reports.module';
import { DiagnosisProcedure } from './diagnosisprocedure/diagnosisprocedure.entity';
import { EncounterInformation } from './encounterinformation/encounterinformation.entity';
import { Genomic } from './genomic/genomic.entity';
import { HealthCareUtilization } from './healthcareutilization/healthcareutilization.entity';
import { HealthRelatedQualityOfLife } from './healthrelatedqualityoflife/healthrelatedqualityoflife.entity';
import { Imaging } from './imaging/imaging.entity';
import { MolecularPathologyLabs } from './molecularpathologylabs/molecularpathologylabs.entity';
import { PerformanceAssessments } from './performanceassessment/performanceassessment.entity';
import { Physician } from './physician/physician.entity';
import { SampleCollection } from './samplecollection/samplecollection.entity';
import { Surgery } from './surgery/sugery.entity';
import { Survival } from './survival/survival.entity';
import { Treatments } from './treatments/treatments.entity';
import { Users } from './users/user.entity';
import { Vitals } from './vitals/vitals.entity';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '@90NBsilver',
      database: 'AIEG',
      entities: [
        Users,
        DiagnosisProcedure,
        EncounterInformation,
        Genomic,
        HealthCareUtilization,
        HealthRelatedQualityOfLife,
        Imaging,
        MolecularPathologyLabs,
        Patient,
        PerformanceAssessments,
        Physician,
        SampleCollection,
        Surgery,
        Survival,
        Treatments,
        Vitals,
      ],
      synchronize: true,
    }),
    UsersModule,
    VitalsModule,
    TreatmentsModule,
    SurvivalModule,
    SurgeryModule,
    SamplecollectionModule,
    PhysicianModule,
    PerformanceassessmentModule,
    MolecularpathologylabsModule,
    ImagingModule,
    HealthrelatedqualityoflifeModule,
    HealthcareutilizationModule,
    GenomicModule,
    EncounterinformationModule,
    DiagnosisprocedureModule,
    ReportsModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    PatientsService,
    VitalsService,
    TreatmentsService,
    SurvivalService,
    SurgeryService,
    SampleCollectionService,
    PhysicianService,
    PerformanceAssessmentService,
    MolecularPathologylabsService,
    ImagingService,
    HealthRelatedQualityOfLifeService,
    GenomicService,
    EncounterinformationService,
    DiagnosisProcedureService,
  ],
})
export class AppModule {}

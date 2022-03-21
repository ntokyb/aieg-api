"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patient_entity_1 = require("./patients/patient.entity");
const users_service_1 = require("./users/users.service");
const patients_service_1 = require("./patients/patients.service");
const vitals_service_1 = require("./vitals/vitals.service");
const treatments_service_1 = require("./treatments/treatments.service");
const survival_service_1 = require("./survival/survival.service");
const surgery_service_1 = require("./surgery/surgery.service");
const samplecollection_service_1 = require("./samplecollection/samplecollection.service");
const physician_service_1 = require("./physician/physician.service");
const performanceassessment_service_1 = require("./performanceassessment/performanceassessment.service");
const molecularpathologylabs_service_1 = require("./molecularpathologylabs/molecularpathologylabs.service");
const imaging_service_1 = require("./imaging/imaging.service");
const healthrelatedqualityoflife_service_1 = require("./healthrelatedqualityoflife/healthrelatedqualityoflife.service");
const genomic_service_1 = require("./genomic/genomic.service");
const encounterinformation_service_1 = require("./encounterinformation/encounterinformation.service");
const diagnosisprocedure_service_1 = require("./diagnosisprocedure/diagnosisprocedure.service");
const users_module_1 = require("./users/users.module");
const patients_module_1 = require("./patients/patients.module");
const vitals_module_1 = require("./vitals/vitals.module");
const treatments_module_1 = require("./treatments/treatments.module");
const survival_module_1 = require("./survival/survival.module");
const surgery_module_1 = require("./surgery/surgery.module");
const samplecollection_module_1 = require("./samplecollection/samplecollection.module");
const physician_module_1 = require("./physician/physician.module");
const performanceassessment_module_1 = require("./performanceassessment/performanceassessment.module");
const molecularpathologylabs_module_1 = require("./molecularpathologylabs/molecularpathologylabs.module");
const imaging_module_1 = require("./imaging/imaging.module");
const healthrelatedqualityoflife_module_1 = require("./healthrelatedqualityoflife/healthrelatedqualityoflife.module");
const healthcareutilization_module_1 = require("./healthcareutilization/healthcareutilization.module");
const genomic_module_1 = require("./genomic/genomic.module");
const encounterinformation_module_1 = require("./encounterinformation/encounterinformation.module");
const diagnosisprocedure_module_1 = require("./diagnosisprocedure/diagnosisprocedure.module");
const reports_module_1 = require("./reports/reports.module");
const diagnosisprocedure_entity_1 = require("./diagnosisprocedure/diagnosisprocedure.entity");
const encounterinformation_entity_1 = require("./encounterinformation/encounterinformation.entity");
const genomic_entity_1 = require("./genomic/genomic.entity");
const healthcareutilization_entity_1 = require("./healthcareutilization/healthcareutilization.entity");
const healthrelatedqualityoflife_entity_1 = require("./healthrelatedqualityoflife/healthrelatedqualityoflife.entity");
const imaging_entity_1 = require("./imaging/imaging.entity");
const molecularpathologylabs_entity_1 = require("./molecularpathologylabs/molecularpathologylabs.entity");
const performanceassessment_entity_1 = require("./performanceassessment/performanceassessment.entity");
const physician_entity_1 = require("./physician/physician.entity");
const samplecollection_entity_1 = require("./samplecollection/samplecollection.entity");
const sugery_entity_1 = require("./surgery/sugery.entity");
const survival_entity_1 = require("./survival/survival.entity");
const treatments_entity_1 = require("./treatments/treatments.entity");
const user_entity_1 = require("./users/user.entity");
const vitals_entity_1 = require("./vitals/vitals.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            patients_module_1.PatientsModule,
            typeorm_1.TypeOrmModule.forRoot({
                connectTimeout: 60 * 60 * 1000,
                acquireTimeout: 60 * 60 * 1000,
                type: 'mysql',
                host: '172.17.0.1',
                port: 3306,
                username: 'ntokybanda',
                password: '@p@$$w0RD@',
                database: 'ntokyDB',
                entities: [
                    diagnosisprocedure_entity_1.DiagnosisProcedure,
                    encounterinformation_entity_1.EncounterInformation,
                    genomic_entity_1.Genomic,
                    healthcareutilization_entity_1.HealthCareUtilization,
                    healthrelatedqualityoflife_entity_1.HealthRelatedQualityOfLife,
                    imaging_entity_1.Imaging,
                    molecularpathologylabs_entity_1.MolecularPathologyLabs,
                    patient_entity_1.Patient,
                    performanceassessment_entity_1.PerformanceAssessments,
                    physician_entity_1.Physician,
                    samplecollection_entity_1.SampleCollection,
                    sugery_entity_1.Surgery,
                    survival_entity_1.Survival,
                    treatments_entity_1.Treatments,
                    user_entity_1.User,
                    vitals_entity_1.Vitals,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            vitals_module_1.VitalsModule,
            treatments_module_1.TreatmentsModule,
            survival_module_1.SurvivalModule,
            surgery_module_1.SurgeryModule,
            samplecollection_module_1.SamplecollectionModule,
            physician_module_1.PhysicianModule,
            performanceassessment_module_1.PerformanceassessmentModule,
            molecularpathologylabs_module_1.MolecularpathologylabsModule,
            imaging_module_1.ImagingModule,
            healthrelatedqualityoflife_module_1.HealthrelatedqualityoflifeModule,
            healthcareutilization_module_1.HealthcareutilizationModule,
            genomic_module_1.GenomicModule,
            encounterinformation_module_1.EncounterinformationModule,
            diagnosisprocedure_module_1.DiagnosisprocedureModule,
            reports_module_1.ReportsModule,
        ],
        providers: [
            users_service_1.UsersService,
            patients_service_1.PatientsService,
            vitals_service_1.VitalsService,
            treatments_service_1.TreatmentsService,
            survival_service_1.SurvivalService,
            surgery_service_1.SurgeryService,
            samplecollection_service_1.SampleCollectionService,
            physician_service_1.PhysicianService,
            performanceassessment_service_1.PerformanceAssessmentService,
            molecularpathologylabs_service_1.MolecularPathologylabsService,
            imaging_service_1.ImagingService,
            healthrelatedqualityoflife_service_1.HealthRelatedQualityOfLifeService,
            genomic_service_1.GenomicService,
            encounterinformation_service_1.EncounterinformationService,
            diagnosisprocedure_service_1.DiagnosisProcedureService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientInformationController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const create_patient_dto_1 = require("./patient-dto/create-patient.dto");
const patients_service_1 = require("./patients.service");
let PatientInformationController = class PatientInformationController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    getAllPatients() {
        return (0, rxjs_1.of)([]);
        throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
    }
    async createPatient(createPatientDto) {
        throw new common_1.ForbiddenException();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], PatientInformationController.prototype, "getAllPatients", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientInformationController.prototype, "createPatient", null);
PatientInformationController = __decorate([
    (0, common_1.Controller)('patient-information'),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientInformationController);
exports.PatientInformationController = PatientInformationController;
//# sourceMappingURL=patient-information.controller.js.map
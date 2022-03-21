"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisprocedureModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const diagnosisprocedure_controller_1 = require("./diagnosisprocedure.controller");
const diagnosisprocedure_entity_1 = require("./diagnosisprocedure.entity");
const diagnosisprocedure_service_1 = require("./diagnosisprocedure.service");
let DiagnosisprocedureModule = class DiagnosisprocedureModule {
};
DiagnosisprocedureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diagnosisprocedure_entity_1.DiagnosisProcedure])],
        controllers: [diagnosisprocedure_controller_1.DiagnosisprocedureController],
        providers: [diagnosisprocedure_service_1.DiagnosisProcedureService],
    })
], DiagnosisprocedureModule);
exports.DiagnosisprocedureModule = DiagnosisprocedureModule;
//# sourceMappingURL=diagnosisprocedure.module.js.map
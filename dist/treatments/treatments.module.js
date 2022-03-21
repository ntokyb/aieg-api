"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const treatments_controller_1 = require("./treatments.controller");
const treatments_entity_1 = require("./treatments.entity");
const treatments_service_1 = require("./treatments.service");
let TreatmentsModule = class TreatmentsModule {
};
TreatmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([treatments_entity_1.Treatments])],
        controllers: [treatments_controller_1.TreatmentsController],
        providers: [treatments_service_1.TreatmentsService],
    })
], TreatmentsModule);
exports.TreatmentsModule = TreatmentsModule;
//# sourceMappingURL=treatments.module.js.map
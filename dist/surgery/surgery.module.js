"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgeryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sugery_entity_1 = require("./sugery.entity");
const surgery_controller_1 = require("./surgery.controller");
const surgery_service_1 = require("./surgery.service");
let SurgeryModule = class SurgeryModule {
};
SurgeryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sugery_entity_1.Surgery])],
        controllers: [surgery_controller_1.SurgeryController],
        providers: [surgery_service_1.SurgeryService],
    })
], SurgeryModule);
exports.SurgeryModule = SurgeryModule;
//# sourceMappingURL=surgery.module.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vitals = void 0;
const typeorm_1 = require("typeorm");
let Vitals = class Vitals {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Vitals.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Vitals.prototype, "DateCreated", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Vitals.prototype, "DateModified", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], Vitals.prototype, "Deleted", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], Vitals.prototype, "Active", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Vitals.prototype, "DateOfTest", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Vitals.prototype, "Height", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Vitals.prototype, "Weight", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Vitals.prototype, "BodyMassIndex", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], Vitals.prototype, "BloodPressure", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], Vitals.prototype, "PregnancyStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], Vitals.prototype, "AlcoholConsumption", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vitals.prototype, "NumberOfSmokes", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], Vitals.prototype, "ExercisingStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Vitals.prototype, "IncomeLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], Vitals.prototype, "Comorbidities", void 0);
Vitals = __decorate([
    (0, typeorm_1.Entity)()
], Vitals);
exports.Vitals = Vitals;
//# sourceMappingURL=vitals.entity.js.map
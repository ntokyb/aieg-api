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
exports.HealthRelatedQualityOfLife = void 0;
const typeorm_1 = require("typeorm");
let HealthRelatedQualityOfLife = class HealthRelatedQualityOfLife {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HealthRelatedQualityOfLife.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], HealthRelatedQualityOfLife.prototype, "DateCreated", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], HealthRelatedQualityOfLife.prototype, "DateModified", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], HealthRelatedQualityOfLife.prototype, "Deleted", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], HealthRelatedQualityOfLife.prototype, "Active", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar'),
    __metadata("design:type", String)
], HealthRelatedQualityOfLife.prototype, "QQLType", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], HealthRelatedQualityOfLife.prototype, "DateOfQQL", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], HealthRelatedQualityOfLife.prototype, "QQLScore", void 0);
HealthRelatedQualityOfLife = __decorate([
    (0, typeorm_1.Entity)()
], HealthRelatedQualityOfLife);
exports.HealthRelatedQualityOfLife = HealthRelatedQualityOfLife;
//# sourceMappingURL=healthrelatedqualityoflife.entity.js.map
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
exports.Imaging = void 0;
const typeorm_1 = require("typeorm");
let Imaging = class Imaging {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Imaging.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Imaging.prototype, "DateCreated", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Imaging.prototype, "DateModified", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], Imaging.prototype, "Deleted", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], Imaging.prototype, "Active", void 0);
Imaging = __decorate([
    (0, typeorm_1.Entity)()
], Imaging);
exports.Imaging = Imaging;
//# sourceMappingURL=imaging.entity.js.map
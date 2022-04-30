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
exports.Info = exports.WorkingType = exports.Gender = void 0;
const typeorm_1 = require("typeorm");
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var WorkingType;
(function (WorkingType) {
    WorkingType["FULLTIME"] = "full-time";
    WorkingType["PARTTIME"] = "part-time";
})(WorkingType = exports.WorkingType || (exports.WorkingType = {}));
let Info = class Info extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Info.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Info.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Info.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Info.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Info.prototype, "hiring_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], Info.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Info.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
    }),
    __metadata("design:type", Number)
], Info.prototype, "vacation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'money',
    }),
    __metadata("design:type", Number)
], Info.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Info.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Gender,
        default: Gender.MALE,
    }),
    __metadata("design:type", String)
], Info.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: WorkingType,
        default: WorkingType.FULLTIME,
    }),
    __metadata("design:type", String)
], Info.prototype, "working_type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
    }),
    __metadata("design:type", Date)
], Info.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamptz',
    }),
    __metadata("design:type", Date)
], Info.prototype, "updated_at", void 0);
Info = __decorate([
    (0, typeorm_1.Entity)()
], Info);
exports.Info = Info;
//# sourceMappingURL=Info.js.map
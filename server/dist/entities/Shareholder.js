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
exports.Shareholder = void 0;
const typeorm_1 = require("typeorm");
let Shareholder = class Shareholder extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'money',
    }),
    __metadata("design:type", Number)
], Shareholder.prototype, "invest", void 0);
Shareholder = __decorate([
    (0, typeorm_1.Entity)()
], Shareholder);
exports.Shareholder = Shareholder;
//# sourceMappingURL=Shareholder.js.map
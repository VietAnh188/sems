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
exports.Ethnicity = void 0;
const typeorm_1 = require("typeorm");
const Person_1 = require("./Person");
const Basic_1 = require("./utils/Basic");
let Ethnicity = class Ethnicity extends Basic_1.Basic {
};
__decorate([
    (0, typeorm_1.OneToMany)(() => Person_1.Person, person => person.ethnicity),
    __metadata("design:type", Array)
], Ethnicity.prototype, "persons", void 0);
Ethnicity = __decorate([
    (0, typeorm_1.Entity)()
], Ethnicity);
exports.Ethnicity = Ethnicity;
//# sourceMappingURL=Ethnicity.js.map
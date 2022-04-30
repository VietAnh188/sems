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
exports.Person = void 0;
const typeorm_1 = require("typeorm");
const Info_1 = require("./utils/Info");
const Account_1 = require("./Account");
const Department_1 = require("./Department");
const Ethnicity_1 = require("./Ethnicity");
const Role_1 = require("./Role");
let Person = class Person extends Info_1.Info {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => Account_1.Account, account => account.person),
    (0, typeorm_1.JoinColumn)({
        name: 'account_id',
    }),
    __metadata("design:type", Account_1.Account)
], Person.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department_1.Department, department => department.persons),
    (0, typeorm_1.JoinColumn)({
        name: 'department_id',
    }),
    __metadata("design:type", Department_1.Department)
], Person.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Ethnicity_1.Ethnicity, ethnicity => ethnicity.persons),
    (0, typeorm_1.JoinColumn)({
        name: 'ethnicity_id',
    }),
    __metadata("design:type", Ethnicity_1.Ethnicity)
], Person.prototype, "ethnicity", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Role_1.Role, role => role.persons, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'person_role',
        joinColumn: {
            name: 'person_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Person.prototype, "roles", void 0);
Person = __decorate([
    (0, typeorm_1.Entity)()
], Person);
exports.Person = Person;
//# sourceMappingURL=Person.js.map
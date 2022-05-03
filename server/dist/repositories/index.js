"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRepository = exports.ethnicityRepository = exports.departmentRepository = exports.accountRepository = exports.personRepository = void 0;
const data_source_1 = require("../data-source");
const Person_1 = require("../entities/Person");
const Account_1 = require("../entities/Account");
const Department_1 = require("../entities/Department");
const Ethnicity_1 = require("../entities/Ethnicity");
const Role_1 = require("../entities/Role");
exports.personRepository = data_source_1.AppDataSource.getRepository(Person_1.Person);
exports.accountRepository = data_source_1.AppDataSource.getRepository(Account_1.Account);
exports.departmentRepository = data_source_1.AppDataSource.getRepository(Department_1.Department);
exports.ethnicityRepository = data_source_1.AppDataSource.getRepository(Ethnicity_1.Ethnicity);
exports.roleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Account_1 = require("./entities/Account");
const Department_1 = require("./entities/Department");
const Ethnicity_1 = require("./entities/Ethnicity");
const Person_1 = require("./entities/Person");
const Role_1 = require("./entities/Role");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'sems',
    synchronize: true,
    logging: true,
    entities: [Account_1.Account, Person_1.Person, Role_1.Role, Department_1.Department, Ethnicity_1.Ethnicity],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map
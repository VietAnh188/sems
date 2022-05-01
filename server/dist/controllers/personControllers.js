"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personControllers = void 0;
const data_source_1 = require("../data-source");
const Person_1 = require("../entities/Person");
const Account_1 = require("../entities/Account");
const Department_1 = require("../entities/Department");
const Role_1 = require("../entities/Role");
const Ethnicity_1 = require("../entities/Ethnicity");
const personRepository = data_source_1.AppDataSource.getRepository(Person_1.Person);
const accountRepository = data_source_1.AppDataSource.getRepository(Account_1.Account);
const departmentRepository = data_source_1.AppDataSource.getRepository(Department_1.Department);
const roleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
const EthnicityRepository = data_source_1.AppDataSource.getRepository(Ethnicity_1.Ethnicity);
exports.personControllers = {
    createNewPerson: async (req, res) => {
        try {
            const _a = req.body, { accountId, departmentId, roleId, ethnicityId } = _a, remain = __rest(_a, ["accountId", "departmentId", "roleId", "ethnicityId"]);
            if (accountId) {
                const account = await accountRepository.findOneBy({
                    id: accountId,
                });
                if (!account)
                    return res.status(404).json({
                        message: 'Account not found',
                    });
                remain.account = account;
            }
            if (departmentId) {
                const department = await departmentRepository.findOneBy({
                    id: departmentId,
                });
                if (!department)
                    return res
                        .status(404)
                        .json({ message: 'Department not found' });
                remain.department = department;
            }
            if (roleId) {
                const role = await roleRepository.findOneBy({ id: roleId });
                if (!role)
                    return res.status(404).json({ message: 'Role not found' });
                remain.roles = [role];
            }
            if (ethnicityId) {
                const ethnicity = await EthnicityRepository.findOneBy({
                    id: ethnicityId,
                });
                if (!ethnicity)
                    return res.status(404).json({
                        message: 'Ethnicity not found',
                    });
            }
            const person = personRepository.create(Object.assign({}, remain));
            await personRepository.save(person);
            return res.status(200).json(person);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updatePerson: async (req, res) => {
        try {
            const { id } = req.params;
            await personRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Update success',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToAccount: async (req, res) => {
        try {
            const { personId, accountId } = req.params;
            await data_source_1.AppDataSource.createQueryBuilder()
                .relation(Person_1.Person, 'account')
                .of(personId)
                .set(accountId);
            return res.status(200).json({
                message: 'Successfully connected to account',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToDepartment: async (req, res) => {
        try {
            const { personId, departmentId } = req.params;
            await data_source_1.AppDataSource.createQueryBuilder()
                .relation(Person_1.Person, 'department')
                .of(personId)
                .set(departmentId);
            return res.status(200).json({
                message: 'Successfully connected to department',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToEthnicity: async (req, res) => {
        try {
            const { personId, ethnicityId } = req.params;
            await data_source_1.AppDataSource.createQueryBuilder()
                .relation(Person_1.Person, 'ethnicity')
                .of(personId)
                .set(ethnicityId);
            return res.status(200).json({
                message: 'Successfully connected to ethnicity',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToRoles: async (req, res) => {
        try {
            const { personId, roleId } = req.params;
            await data_source_1.AppDataSource.createQueryBuilder()
                .relation(Person_1.Person, 'roles')
                .of(personId)
                .add(roleId);
            return res.status(200).json({
                message: 'Successfully connected to roles',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getOnePerson: async (req, res) => {
        try {
            const person = await personRepository
                .createQueryBuilder('person')
                .where('person.id = :id', { id: req.params.id })
                .getOne();
            if (!person)
                return res.status(404).json({ message: 'Person not found' });
            return res.status(200).json(person);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllPersons: async (_req, res) => {
        try {
            const persons = await personRepository.find();
            return res.status(200).json(persons);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    getSomePersons: async (req, res) => {
        try {
            const { q } = req.query;
            const persons = await personRepository
                .createQueryBuilder('person')
                .where('person.first_name LIKE :q', { q: `%${q}%` })
                .orWhere('person.last_name LIKE :q', { q: `%${q}%` })
                .getMany();
            return res.status(200).json(persons);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    },
};
//# sourceMappingURL=personControllers.js.map
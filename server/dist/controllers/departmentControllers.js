"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentControllers = void 0;
const data_source_1 = require("../data-source");
const Department_1 = require("../entities/Department");
const groupBy_1 = require("../functions/groupBy");
const departmentRepository = data_source_1.AppDataSource.getRepository(Department_1.Department);
exports.departmentControllers = {
    createNewDepartment: async (req, res) => {
        try {
            const existingDepartment = await departmentRepository.findOneBy({
                name: req.body.name,
            });
            if (existingDepartment)
                return res.status(400).json({
                    message: 'Department already exists',
                });
            const department = departmentRepository.create(req.body);
            await departmentRepository.save(department);
            return res.status(200).json(department);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updateDepartment: async (req, res) => {
        try {
            const { id } = req.params;
            await departmentRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Department updated successfully',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    deleteDepartment: async (req, res) => {
        try {
            const { id } = req.params;
            await departmentRepository.delete(id);
            return res.status(200).json({
                message: 'Department deleted successfully',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getOneDepartment: async (req, res) => {
        try {
            const { id } = req.params;
            const department = await departmentRepository.findOneBy({ id });
            if (!department)
                return res
                    .status(404)
                    .json({ message: 'Department not found' });
            return res.status(200).json(department);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllDepartment: async (_req, res) => {
        try {
            const departments = await departmentRepository.find();
            return res.status(200).json(departments);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllPersons: async (req, res) => {
        try {
            const department = await departmentRepository
                .createQueryBuilder('department')
                .leftJoinAndSelect('department.persons', 'person')
                .where('department.id = :departmentId', {
                departmentId: req.params.id,
            })
                .getOne();
            if (!department) {
                return res.status(404).json({
                    message: 'Department not found',
                });
            }
            const { persons } = department;
            return res.status(200).json(persons);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllAndGroupGenderPerson: async (_req, res) => {
        try {
            const result = [];
            const departments = await departmentRepository.find();
            for (const department of departments) {
                const departments = await departmentRepository
                    .createQueryBuilder('department')
                    .leftJoinAndSelect('department.persons', 'person')
                    .where('department.id = :departmentId', {
                    departmentId: department.id,
                })
                    .getMany();
                result.push(...departments);
            }
            const finalResult = result.map((department) => {
                const { persons } = department;
                const groupedByGender = (0, groupBy_1.groupBy)(persons, (person) => person.gender);
                return Object.assign({ name: department.name }, groupedByGender);
            });
            return res.status(200).json(finalResult);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};
//# sourceMappingURL=departmentControllers.js.map
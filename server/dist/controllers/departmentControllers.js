"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentControllers = void 0;
const groupBy_1 = require("../functions/groupBy");
const repositories_1 = require("../repositories");
exports.departmentControllers = {
    createNewDepartment: async (req, res) => {
        try {
            const existingDepartment = await repositories_1.departmentRepository.findOneBy({
                name: req.body.name,
            });
            if (existingDepartment)
                return res.status(400).json({
                    message: 'Department already exists',
                });
            const department = repositories_1.departmentRepository.create(req.body);
            await repositories_1.departmentRepository.save(department);
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
            await repositories_1.departmentRepository.update(id, req.body);
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
            await repositories_1.departmentRepository.delete(id);
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
            const department = await repositories_1.departmentRepository.findOneBy({ id });
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
            const departments = await repositories_1.departmentRepository.find();
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
            const department = await repositories_1.departmentRepository
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
            const departments = await repositories_1.departmentRepository.find();
            for (const department of departments) {
                const departments = await repositories_1.departmentRepository
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentControllers = void 0;
const data_source_1 = require("../data-source");
const Department_1 = require("../entities/Department");
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
};
//# sourceMappingURL=departmentControllers.js.map
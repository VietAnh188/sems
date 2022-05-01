import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Department } from '../entities/Department';

const departmentRepository = AppDataSource.getRepository(Department);

export const departmentControllers = {
    createNewDepartment: async (req: Request, res: Response) => {
        try {
            const existingDepartment = await departmentRepository.findOneBy({
                name: req.body.name,
            });
            if (existingDepartment)
                return res.status(400).json({
                    message: 'Department already exists',
                });
            const department: Department[] = departmentRepository.create(
                req.body
            );
            await departmentRepository.save(department);
            return res.status(200).json(department);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updateDepartment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await departmentRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Department updated successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    deleteDepartment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await departmentRepository.delete(id);
            return res.status(200).json({
                message: 'Department deleted successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Role } from '../entities/Role';

const roleRepository = AppDataSource.getRepository(Role);

export const roleControllers = {
    createNewRole: async (req: Request, res: Response) => {
        try {
            const existingRole = await roleRepository.findOneBy({
                name: req.body.name,
            });

            if (existingRole)
                return res.status(400).json({
                    message: 'Role already exists',
                });

            const newRole: Role[] = roleRepository.create(req.body);

            await roleRepository.save(newRole);

            return res.status(200).json(newRole);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updateRole: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await roleRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Role updated successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    deleteRole: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await roleRepository.delete(id);
            return res.status(200).json({
                message: 'Role deleted successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

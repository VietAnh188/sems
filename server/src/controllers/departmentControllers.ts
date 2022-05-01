import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Department } from '../entities/Department';
import { Person } from '../entities/Person';
import { groupBy } from '../functions/groupBy';

const departmentRepository = AppDataSource.getRepository(Department);

interface IGenderResult {
    name: string;
    male: Person[];
    female: Person[];
    other: Person[];
}

export const departmentControllers = {
    createNewDepartment: async (req: Request, res: Response) => {
        try {
            const existingDepartment: Department | null =
                await departmentRepository.findOneBy({
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
    getOneDepartment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const department: Department | null =
                await departmentRepository.findOneBy({ id });
            if (!department)
                return res
                    .status(404)
                    .json({ message: 'Department not found' });
            return res.status(200).json(department);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllDepartment: async (_req: Request, res: Response) => {
        try {
            const departments: Department[] = await departmentRepository.find();
            return res.status(200).json(departments);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllPersons: async (req: Request, res: Response) => {
        try {
            const department: Department | null = await departmentRepository
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
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllAndGroupGenderPerson: async (_req: Request, res: Response) => {
        try {
            const result: Department[] = [];
            const departments: Department[] = await departmentRepository.find();
            for (const department of departments) {
                const departments: Department[] = await departmentRepository
                    .createQueryBuilder('department')
                    .leftJoinAndSelect('department.persons', 'person')
                    .where('department.id = :departmentId', {
                        departmentId: department.id,
                    })
                    .getMany();
                result.push(...departments);
            }

            const finalResult: IGenderResult[] = result.map(
                (department: Department): IGenderResult => {
                    const { persons } = department;
                    const groupedByGender = groupBy(
                        persons,
                        (person: Person) => person.gender
                    );
                    return {
                        name: department.name,
                        ...groupedByGender,
                    };
                }
            );
            return res.status(200).json(finalResult);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

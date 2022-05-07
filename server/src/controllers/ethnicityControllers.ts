import { Request, Response } from 'express';
import { Person } from '../entities/Person';
import { Ethnicity } from '../entities/Ethnicity';
import { ethnicityRepository } from '../repositories';

interface IEthnicitysPersonsResult {
    name: string;
    persons: Person[];
}

export const ethnicityControllers = {
    createNewEthnicity: async (req: Request, res: Response) => {
        try {
            const existingEthnicity: Ethnicity | null =
                await ethnicityRepository.findOneBy({
                    name: req.body.name,
                });
            if (existingEthnicity)
                return res.status(400).json({
                    message: 'Ethnicity already exists',
                });
            const newEthnicity: Ethnicity[] = ethnicityRepository.create(
                req.body
            );
            await ethnicityRepository.save(newEthnicity);
            return res.status(200).json(newEthnicity);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updateEthnicity: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await ethnicityRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Ethnicity updated successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    deleteEthnicity: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await ethnicityRepository.delete(id);
            return res.status(200).json({
                message: 'Ethnicity deleted successfully',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllEthnicity: async (_req: Request, res: Response) => {
        try {
            const ethnicitys = await ethnicityRepository.find();
            return res.status(200).json(ethnicitys);
        } catch (error) {
            return res.status(500).json({
                meesage: error,
            });
        }
    },
    getAllPersons: async (req: Request, res: Response) => {
        try {
            const ethnicity: Ethnicity | null = await ethnicityRepository
                .createQueryBuilder('ethnicity')
                .leftJoinAndSelect('ethnicity.persons', 'persons')
                .where('ethnicity.id = :ethnicityId', {
                    ethnicityId: req.params.id,
                })
                .getOne();
            if (!ethnicity) {
                return res.status(404).json({
                    message: 'Ethnicity not found',
                });
            }
            const { persons } = ethnicity;
            return res.status(200).json(persons);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllPersonsInAllEthnicity: async (_req: Request, res: Response) => {
        try {
            const result: Ethnicity[] = [];
            const ethnicitys: Ethnicity[] = await ethnicityRepository.find();
            for (const ethnicity of ethnicitys) {
                const ethnicityWithPersons: Ethnicity | null =
                    await ethnicityRepository
                        .createQueryBuilder('ethnicity')
                        .leftJoinAndSelect('ethnicity.persons', 'persons')
                        .where('ethnicity.id = :ethnicityId', {
                            ethnicityId: ethnicity.id,
                        })
                        .getOne();
                ethnicityWithPersons && result.push(ethnicityWithPersons);
            }
            const finalResult: IEthnicitysPersonsResult[] = result.map(
                (ethnicity: Ethnicity): IEthnicitysPersonsResult => ({
                    name: ethnicity.name,
                    persons: ethnicity.persons,
                })
            );
            return res.status(200).json(finalResult);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

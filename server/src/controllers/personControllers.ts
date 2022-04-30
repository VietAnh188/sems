import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Person } from '../entities/Person';

const personRepository = AppDataSource.getRepository(Person);

export const personControllers = {
    createNewPerson: async (req: Request, res: Response) => {
        try {
            const person: Person[] = personRepository.create(req.body);
            await personRepository.save(person);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToAccount: async (req: Request, res: Response) => {
        try {
            const { personId, accountId } = req.params;
            await personRepository
                .createQueryBuilder()
                .relation(Person, 'account')
                .of(personId)
                .set(accountId);
            return res.status(200).json({
                message: 'Successfully connected to account',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

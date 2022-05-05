import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Person } from '../entities/Person';
import {
    personRepository,
    accountRepository,
    departmentRepository,
    roleRepository,
    ethnicityRepository,
} from '../repositories';
import { groupByMonth, groupByYear } from '../functions/groupBy';

interface IHiringResult {
    name: string;
    [key: string]: string | Person[];
}

export const personControllers = {
    createNewPerson: async (req: Request, res: Response) => {
        try {
            const { accountId, departmentId, roleId, ethnicityId, ...remain } =
                req.body;
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
                const ethnicity = await ethnicityRepository.findOneBy({
                    id: ethnicityId,
                });
                if (!ethnicity)
                    return res.status(404).json({
                        message: 'Ethnicity not found',
                    });
                remain.ethnicity = ethnicity;
            }
            const person: Person[] = personRepository.create({ ...remain });
            await personRepository.save(person);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updatePerson: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await personRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Update success',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToAccount: async (req: Request, res: Response) => {
        try {
            const { personId, accountId } = req.params;
            await AppDataSource.createQueryBuilder()
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
    connectToDepartment: async (req: Request, res: Response) => {
        try {
            const { personId, departmentId } = req.params;
            await AppDataSource.createQueryBuilder()
                .relation(Person, 'department')
                .of(personId)
                .set(departmentId);
            return res.status(200).json({
                message: 'Successfully connected to department',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToEthnicity: async (req: Request, res: Response) => {
        try {
            const { personId, ethnicityId } = req.params;
            await AppDataSource.createQueryBuilder()
                .relation(Person, 'ethnicity')
                .of(personId)
                .set(ethnicityId);
            return res.status(200).json({
                message: 'Successfully connected to ethnicity',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToRoles: async (req: Request, res: Response) => {
        try {
            const { personId, roleId } = req.params;
            await AppDataSource.createQueryBuilder()
                .relation(Person, 'roles')
                .of(personId)
                .add(roleId);
            return res.status(200).json({
                message: 'Successfully connected to roles',
            });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getOnePerson: async (req: Request, res: Response) => {
        try {
            const person: Person | null = await personRepository
                .createQueryBuilder('person')
                .where('person.id = :id', { id: req.params.id })
                .getOne();
            if (!person)
                return res.status(404).json({ message: 'Person not found' });
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    getAllPersons: async (_req: Request, res: Response) => {
        try {
            const persons: Person[] = await personRepository.find();
            return res.status(200).json(persons);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    getSomePersons: async (req: Request, res: Response) => {
        try {
            const { q } = req.query;
            const persons: Person[] = await personRepository
                .createQueryBuilder('person')
                .where('person.first_name LIKE :q', { q: `%${q}%` })
                .orWhere('person.last_name LIKE :q', { q: `%${q}%` })
                .getMany();
            return res.status(200).json(persons);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    getAllAndGroupHiring: async (_req: Request, res: Response) => {
        try {
            const result: IHiringResult[] = [];
            const persons: Person[] = await personRepository.find();
            const groupedPersons: Record<string, Person[]> = groupByMonth(
                persons,
                (person: Person): Date => person.hiring_date
            );
            for (const [month, persons] of Object.entries(groupedPersons)) {
                result.push({
                    name: month,
                    ...groupByYear(
                        persons,
                        (person: Person): Date => person.hiring_date
                    ),
                });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
};

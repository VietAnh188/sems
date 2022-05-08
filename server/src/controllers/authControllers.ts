import { Request, Response } from 'express';
import argon2 from 'argon2';
import { Account } from '../entities/Account';
import { accountRepository } from '../repositories';

export const authControllers = {
    login: async (req: Request, res: Response) => {
        try {
            const account: Account | null = await accountRepository.findOneBy({
                username: req.body.username,
            });
            if (!account)
                return res
                    .status(400)
                    .json({ message: 'Account does not exist' });
            if (await argon2.verify(account.password, req.body.password)) {
                const accountRelational: Account | null =
                    await accountRepository
                        .createQueryBuilder('account')
                        .leftJoinAndSelect('account.person', 'person')
                        .where('account.id = :id', { id: account.id })
                        .leftJoinAndSelect('person.roles', 'roles')
                        .leftJoinAndSelect('person.department', 'department')
                        .leftJoinAndSelect('person.ethnicity', 'ethnicity')
                        .getOne();
                if (!accountRelational) {
                    return res.status(404).json({
                        message: 'Account not found',
                    });
                }
                const { password, ...remain } = accountRelational;
                return res.status(200).json({ ...remain });
            } else {
                return res
                    .status(400)
                    .json({ message: 'Password is incorrect' });
            }
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    register: async (req: Request, res: Response) => {
        try {
            const existUsername: Account | null =
                await accountRepository.findOneBy({
                    username: req.body.username,
                });
            if (existUsername)
                return res
                    .status(400)
                    .json({ message: 'Username already exists' });
            const existEmail: Account | null =
                await accountRepository.findOneBy({
                    email: req.body.email,
                });
            const hashedPassword = await argon2.hash(req.body.password);
            if (existEmail)
                return res
                    .status(400)
                    .json({ message: 'Email already exists' });
            const newAccount: Account[] = accountRepository.create({
                ...req.body,
                password: hashedPassword,
            });
            await accountRepository.save(newAccount);
            return res.status(200).json(newAccount);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};

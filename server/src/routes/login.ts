import express, { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import argon2 from 'argon2';
import { Account } from '../entities/Account';

const router = express.Router();

const accountRepository = AppDataSource.getRepository(Account);

router.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
        const account: Account | null = await accountRepository.findOneBy({
            username: req.body.username,
        });
        if (!account) return res.status(400).send('Username does not exist');
        if (await argon2.verify(account.password, req.body.password)) {
            const { password, ...remain } = account;
            return res.status(200).json({ ...remain });
        } else {
            return res.status(400).send('Password is incorrect');
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});

export { router as LoginRouter };

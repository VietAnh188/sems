import express, { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import argon2 from 'argon2';
import { Account } from '../entities/Account';

const router = express.Router();

const accountRepository = AppDataSource.getRepository(Account);

router.post('/api/auth/register', async (req: Request, res: Response) => {
    try {
        const existUsername: Account | null = await accountRepository.findOneBy(
            {
                username: req.body.username,
            }
        );
        if (existUsername)
            return res.status(400).send('Username already exists');
        const existEmail: Account | null = await accountRepository.findOneBy({
            email: req.body.email,
        });
        const hashedPassword = await argon2.hash(req.body.password);
        if (existEmail) return res.status(400).json('Email already exists');
        const newAccount: Account[] = await accountRepository.create({
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
});

export { router as RegisterRouter };

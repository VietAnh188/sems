import express from 'express';
import { authControllers } from '../controllers/authControllers';

const router = express.Router();

router.post('/login', authControllers.login);
router.post('/register', authControllers.register);

export { router as AuthRouter };

import express, { Router } from 'express';
import { roleControllers } from '../controllers/roleControllers';
import { authManager } from '../middlewares';

const router: Router = express.Router();

router.post('/', authManager, roleControllers.createNewRole);
router.put('/:id', authManager, roleControllers.updateRole);
router.delete('/:id', authManager, roleControllers.deleteRole);

export { router as RoleRouter };

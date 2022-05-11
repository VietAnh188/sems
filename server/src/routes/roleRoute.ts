import express, { Router } from 'express';
import { roleControllers } from '../controllers/roleControllers';
import { authDeleteRecord } from '../middlewares';

const router: Router = express.Router();

router.post('/', roleControllers.createNewRole);
router.put('/:id', roleControllers.updateRole);
router.delete('/:id', authDeleteRecord, roleControllers.deleteRole);

export { router as RoleRouter };

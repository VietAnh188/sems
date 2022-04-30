import express from 'express';
import { roleControllers } from '../controllers/roleControllers';

const router = express.Router();

router.post('/', roleControllers.createNewRole);
router.put('/:id', roleControllers.updateRole);
router.delete('/:id', roleControllers.deleteRole);

export { router as RoleRouter };

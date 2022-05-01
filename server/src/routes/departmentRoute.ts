import express from 'express';
import { departmentControllers } from '../controllers/departmentControllers';

const router = express.Router();

router.post('/', departmentControllers.createNewDepartment);
router.put('/:id', departmentControllers.updateDepartment);
router.delete('/:id', departmentControllers.deleteDepartment);

export { router as DepartmentRouter };

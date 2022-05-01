import express from 'express';
import { departmentControllers } from '../controllers/departmentControllers';

const router = express.Router();

router.post('/', departmentControllers.createNewDepartment);
router.put('/:id', departmentControllers.updateDepartment);
router.delete('/:id', departmentControllers.deleteDepartment);
router.get(
    '/getallgroupgender',
    departmentControllers.getAllAndGroupGenderPerson
);
router.get('/:id', departmentControllers.getAllPersons);

export { router as DepartmentRouter };

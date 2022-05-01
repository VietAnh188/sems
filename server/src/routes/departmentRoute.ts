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
router.get('/:id/persons', departmentControllers.getAllPersons);
router.get('/:id', departmentControllers.getOneDepartment);
router.get('/', departmentControllers.getAllDepartment);

export { router as DepartmentRouter };

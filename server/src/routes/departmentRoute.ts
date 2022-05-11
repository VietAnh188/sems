import express, { Router } from 'express';
import { departmentControllers } from '../controllers/departmentControllers';
import { authDeleteRecord } from '../middlewares';

const router: Router = express.Router();

router.post('/', departmentControllers.createNewDepartment);
router.put('/:id', departmentControllers.updateDepartment);
router.delete('/:id', authDeleteRecord, departmentControllers.deleteDepartment);
router.get('/group/gender', departmentControllers.getAllAndGroupGenderPerson);
router.get(
    '/group/workingtype',
    departmentControllers.getAllAndGroupWorkingTypePerson
);
router.get('/:id/persons', departmentControllers.getAllPersons);
router.get('/:id', departmentControllers.getOneDepartment);
router.get('/', departmentControllers.getAllDepartment);

export { router as DepartmentRouter };

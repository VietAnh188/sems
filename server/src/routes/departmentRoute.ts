import express, { Router } from 'express';
import { departmentControllers } from '../controllers/departmentControllers';
import { authManager } from '../middlewares';

const router: Router = express.Router();

router.post('/', authManager, departmentControllers.createNewDepartment);
router.put('/:id', authManager, departmentControllers.updateDepartment);
router.delete('/:id', authManager, departmentControllers.deleteDepartment);
router.get('/group/gender', departmentControllers.getAllAndGroupGenderPerson);
router.get(
    '/group/workingtype',
    departmentControllers.getAllAndGroupWorkingTypePerson
);
router.get('/:id/persons', authManager, departmentControllers.getAllPersons);
router.get('/:id', departmentControllers.getOneDepartment);
router.get('/', authManager, departmentControllers.getAllDepartment);

export { router as DepartmentRouter };

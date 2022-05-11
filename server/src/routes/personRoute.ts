import express, { Router } from 'express';
import { personControllers } from '../controllers/personControllers';
import { authGetPerson, authGetAllRecord } from '../middlewares';

const router: Router = express.Router();

router.post('/', personControllers.createNewPerson);
router.put('/:personId/account/:accountId', personControllers.connectToAccount);
router.put(
    '/:personId/department/:departmentId',
    personControllers.connectToDepartment
);
router.put(
    '/:personId/ethnicity/:ethnicityId',
    personControllers.connectToEthnicity
);
router.put('/:personId/role/:roleId', personControllers.connectToRoles);
router.get('/group/hiring', personControllers.getAllAndGroupHiring);
router.put('/:id', personControllers.updatePerson);
router.get('/search', personControllers.getSomePersons);
router.get('/:id', authGetPerson, personControllers.getOnePerson);
router.get('/', authGetAllRecord, personControllers.getAllPersons);

export { router as PersonRouter };

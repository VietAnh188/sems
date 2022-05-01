import express from 'express';
import { personControllers } from '../controllers/personControllers';

const router = express.Router();

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

export { router as PersonRouter };

import express, { Router } from 'express';
import { ethnicityControllers } from '../controllers/ethnicityControllers';
import { authManager } from '../middlewares';

const router: Router = express.Router();

router.get('/all/persons', ethnicityControllers.getAllPersonsInAllEthnicity);
router.get('/:id/persons', authManager, ethnicityControllers.getAllPersons);
router.get('/', authManager, ethnicityControllers.getAllEthnicity);
router.post('/', authManager, ethnicityControllers.createNewEthnicity);
router.put('/:id', authManager, ethnicityControllers.updateEthnicity);
router.delete('/:id', authManager, ethnicityControllers.deleteEthnicity);

export { router as EthnicityRouter };

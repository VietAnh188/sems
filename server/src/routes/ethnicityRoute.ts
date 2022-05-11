import express, { Router } from 'express';
import { ethnicityControllers } from '../controllers/ethnicityControllers';
import { authDeleteRecord } from '../middlewares';

const router: Router = express.Router();

router.get('/all/persons', ethnicityControllers.getAllPersonsInAllEthnicity);
router.get('/:id/persons', ethnicityControllers.getAllPersons);
router.get('/', ethnicityControllers.getAllEthnicity);
router.post('/', ethnicityControllers.createNewEthnicity);
router.put('/:id', ethnicityControllers.updateEthnicity);
router.delete('/:id', authDeleteRecord, ethnicityControllers.deleteEthnicity);

export { router as EthnicityRouter };

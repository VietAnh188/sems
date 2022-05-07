import express, { Router } from 'express';
import { ethnicityControllers } from '../controllers/ethnicityControllers';

const router: Router = express.Router();

router.get('/:id/persons', ethnicityControllers.getAllPersons);
router.get('/', ethnicityControllers.getAllEthnicity);
router.post('/', ethnicityControllers.createNewEthnicity);
router.put('/:id', ethnicityControllers.updateEthnicity);
router.delete('/:id', ethnicityControllers.deleteEthnicity);

export { router as EthnicityRouter };

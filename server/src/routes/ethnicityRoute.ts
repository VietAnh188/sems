import express from 'express';
import { ethnicityControllers } from '../controllers/ethnicityControllers';

const router = express.Router();

router.post('/', ethnicityControllers.createNewEthnicity);
router.put('/:id', ethnicityControllers.updateEthnicity);
router.delete('/:id', ethnicityControllers.deleteEthnicity);

export { router as EthnicityRouter };

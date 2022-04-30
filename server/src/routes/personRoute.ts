import express from 'express';
import { personControllers } from '../controllers/personControllers';

const router = express.Router();

router.post('/', personControllers.createNewPerson);
router.put('/:personId/connect/:accountId', personControllers.connectToAccount);

export { router as PersonRouter };

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthnicityRouter = void 0;
const express_1 = __importDefault(require("express"));
const ethnicityControllers_1 = require("../controllers/ethnicityControllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
exports.EthnicityRouter = router;
router.get('/all/persons', ethnicityControllers_1.ethnicityControllers.getAllPersonsInAllEthnicity);
router.get('/:id/persons', middlewares_1.authManager, ethnicityControllers_1.ethnicityControllers.getAllPersons);
router.get('/', middlewares_1.authManager, ethnicityControllers_1.ethnicityControllers.getAllEthnicity);
router.post('/', middlewares_1.authManager, ethnicityControllers_1.ethnicityControllers.createNewEthnicity);
router.put('/:id', middlewares_1.authManager, ethnicityControllers_1.ethnicityControllers.updateEthnicity);
router.delete('/:id', middlewares_1.authManager, ethnicityControllers_1.ethnicityControllers.deleteEthnicity);
//# sourceMappingURL=ethnicityRoute.js.map
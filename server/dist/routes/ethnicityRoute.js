"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthnicityRouter = void 0;
const express_1 = __importDefault(require("express"));
const ethnicityControllers_1 = require("../controllers/ethnicityControllers");
const router = express_1.default.Router();
exports.EthnicityRouter = router;
router.get('/', ethnicityControllers_1.ethnicityControllers.getAllEthnicity);
router.post('/', ethnicityControllers_1.ethnicityControllers.createNewEthnicity);
router.put('/:id', ethnicityControllers_1.ethnicityControllers.updateEthnicity);
router.delete('/:id', ethnicityControllers_1.ethnicityControllers.deleteEthnicity);
//# sourceMappingURL=ethnicityRoute.js.map
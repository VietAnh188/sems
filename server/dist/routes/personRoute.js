"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRouter = void 0;
const express_1 = __importDefault(require("express"));
const personControllers_1 = require("../controllers/personControllers");
const router = express_1.default.Router();
exports.PersonRouter = router;
router.post('/', personControllers_1.personControllers.createNewPerson);
router.put('/:personId/connect/:accountId', personControllers_1.personControllers.connectToAccount);
//# sourceMappingURL=personRoute.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const roleControllers_1 = require("../controllers/roleControllers");
const router = express_1.default.Router();
exports.RoleRouter = router;
router.post('/', roleControllers_1.roleControllers.createNewRole);
router.put('/:id', roleControllers_1.roleControllers.updateRole);
router.delete('/:id', roleControllers_1.roleControllers.deleteRole);
//# sourceMappingURL=roleRoute.js.map
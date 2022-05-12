"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const roleControllers_1 = require("../controllers/roleControllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
exports.RoleRouter = router;
router.post('/', middlewares_1.authManager, roleControllers_1.roleControllers.createNewRole);
router.put('/:id', middlewares_1.authManager, roleControllers_1.roleControllers.updateRole);
router.delete('/:id', middlewares_1.authManager, roleControllers_1.roleControllers.deleteRole);
//# sourceMappingURL=roleRoute.js.map
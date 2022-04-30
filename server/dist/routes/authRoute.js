"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../controllers/authControllers");
const router = express_1.default.Router();
exports.AuthRouter = router;
router.post('/login', authControllers_1.authControllers.login);
router.post('/register', authControllers_1.authControllers.register);
//# sourceMappingURL=authRoute.js.map
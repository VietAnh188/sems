"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const departmentControllers_1 = require("../controllers/departmentControllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
exports.DepartmentRouter = router;
router.post('/', middlewares_1.authManager, departmentControllers_1.departmentControllers.createNewDepartment);
router.put('/:id', middlewares_1.authManager, departmentControllers_1.departmentControllers.updateDepartment);
router.delete('/:id', middlewares_1.authManager, departmentControllers_1.departmentControllers.deleteDepartment);
router.get('/group/gender', departmentControllers_1.departmentControllers.getAllAndGroupGenderPerson);
router.get('/group/workingtype', departmentControllers_1.departmentControllers.getAllAndGroupWorkingTypePerson);
router.get('/:id/persons', middlewares_1.authManager, departmentControllers_1.departmentControllers.getAllPersons);
router.get('/:id', departmentControllers_1.departmentControllers.getOneDepartment);
router.get('/', middlewares_1.authManager, departmentControllers_1.departmentControllers.getAllDepartment);
//# sourceMappingURL=departmentRoute.js.map
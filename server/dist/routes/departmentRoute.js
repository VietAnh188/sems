"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const departmentControllers_1 = require("../controllers/departmentControllers");
const router = express_1.default.Router();
exports.DepartmentRouter = router;
router.post('/', departmentControllers_1.departmentControllers.createNewDepartment);
router.put('/:id', departmentControllers_1.departmentControllers.updateDepartment);
router.delete('/:id', departmentControllers_1.departmentControllers.deleteDepartment);
router.get('/getallgroupgender', departmentControllers_1.departmentControllers.getAllAndGroupGenderPerson);
router.get('/:id/persons', departmentControllers_1.departmentControllers.getAllPersons);
router.get('/:id', departmentControllers_1.departmentControllers.getOneDepartment);
router.get('/', departmentControllers_1.departmentControllers.getAllDepartment);
//# sourceMappingURL=departmentRoute.js.map
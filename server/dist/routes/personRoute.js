"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRouter = void 0;
const express_1 = __importDefault(require("express"));
const personControllers_1 = require("../controllers/personControllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
exports.PersonRouter = router;
router.post('/', personControllers_1.personControllers.createNewPerson);
router.put('/:personId/account/:accountId', personControllers_1.personControllers.connectToAccount);
router.put('/:personId/department/:departmentId', personControllers_1.personControllers.connectToDepartment);
router.put('/:personId/ethnicity/:ethnicityId', personControllers_1.personControllers.connectToEthnicity);
router.put('/:personId/role/:roleId', personControllers_1.personControllers.connectToRoles);
router.get('/group/hiring', personControllers_1.personControllers.getAllAndGroupHiring);
router.put('/:id', personControllers_1.personControllers.updatePerson);
router.get('/search', personControllers_1.personControllers.getSomePersons);
router.get('/:id', middlewares_1.authGetPerson, personControllers_1.personControllers.getOnePerson);
router.get('/', personControllers_1.personControllers.getAllPersons);
//# sourceMappingURL=personRoute.js.map
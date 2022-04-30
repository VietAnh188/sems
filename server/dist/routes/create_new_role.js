"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewRoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
const Role_1 = require("../entities/Role");
const router = express_1.default.Router();
exports.CreateNewRoleRouter = router;
const roleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
router.post('/api/role', async (req, res) => {
    try {
        const existingRole = await roleRepository.findOneBy({
            name: req.body.name,
        });
        if (existingRole)
            return res.status(400).json({
                message: 'Role already exists',
            });
        const newRole = roleRepository.create(req.body);
        await roleRepository.save(newRole);
        return res.status(200).json(newRole);
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
//# sourceMappingURL=create_new_role.js.map
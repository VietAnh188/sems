"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
const Role_1 = require("../entities/Role");
const router = express_1.default.Router();
exports.UpdateRoleRouter = router;
const roleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
router.put('/api/role/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await roleRepository.update(id, req.body);
        return res.status(200).json({
            message: 'Role updated successfully',
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
//# sourceMappingURL=update_role.js.map
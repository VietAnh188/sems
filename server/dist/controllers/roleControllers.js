"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleControllers = void 0;
const data_source_1 = require("../data-source");
const Role_1 = require("../entities/Role");
const roleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
exports.roleControllers = {
    createNewRole: async (req, res) => {
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
    },
    updateRole: async (req, res) => {
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
    },
    deleteRole: async (req, res) => {
        try {
            const { id } = req.params;
            await roleRepository.delete(id);
            return res.status(200).json({
                message: 'Role deleted successfully',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};
//# sourceMappingURL=roleControllers.js.map
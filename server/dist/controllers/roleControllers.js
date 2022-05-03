"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleControllers = void 0;
const repositories_1 = require("../repositories");
exports.roleControllers = {
    createNewRole: async (req, res) => {
        try {
            const existingRole = await repositories_1.roleRepository.findOneBy({
                name: req.body.name,
            });
            if (existingRole)
                return res.status(400).json({
                    message: 'Role already exists',
                });
            const newRole = repositories_1.roleRepository.create(req.body);
            await repositories_1.roleRepository.save(newRole);
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
            await repositories_1.roleRepository.update(id, req.body);
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
            await repositories_1.roleRepository.delete(id);
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
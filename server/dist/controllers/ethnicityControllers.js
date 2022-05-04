"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethnicityControllers = void 0;
const repositories_1 = require("../repositories");
exports.ethnicityControllers = {
    createNewEthnicity: async (req, res) => {
        try {
            const existingEthnicity = await repositories_1.ethnicityRepository.findOneBy({
                name: req.body.name,
            });
            if (existingEthnicity)
                return res.status(400).json({
                    message: 'Ethnicity already exists',
                });
            const newEthnicity = repositories_1.ethnicityRepository.create(req.body);
            await repositories_1.ethnicityRepository.save(newEthnicity);
            return res.status(200).json(newEthnicity);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    updateEthnicity: async (req, res) => {
        try {
            const { id } = req.params;
            await repositories_1.ethnicityRepository.update(id, req.body);
            return res.status(200).json({
                message: 'Ethnicity updated successfully',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    deleteEthnicity: async (req, res) => {
        try {
            const { id } = req.params;
            await repositories_1.ethnicityRepository.delete(id);
            return res.status(200).json({
                message: 'Ethnicity deleted successfully',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};
//# sourceMappingURL=ethnicityControllers.js.map
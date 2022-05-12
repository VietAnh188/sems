"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions_1 = require("../permissions");
const authManager = (req, res, next) => {
    const person = req.body.person;
    if (!(0, permissions_1.CanDoWithManager)({ roles: person.roles })) {
        return res.status(403).json({
            message: 'You are not Manager',
        });
    }
    next();
    return null;
};
exports.default = authManager;
//# sourceMappingURL=authManager.js.map
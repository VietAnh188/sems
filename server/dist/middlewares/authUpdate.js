"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions_1 = require("../permissions");
const authUpdatePerson = (req, res, next) => {
    const person = req.body.person;
    const targetPersonId = req.params.id;
    if (!(0, permissions_1.CanDoWithManager)({ roles: person.roles }) ||
        person.id === targetPersonId) {
        return res.status(403).json({
            message: 'You are not allowed to update this person',
        });
    }
    next();
    return null;
};
exports.default = authUpdatePerson;
//# sourceMappingURL=authUpdate.js.map
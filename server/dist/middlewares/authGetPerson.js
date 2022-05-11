"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions_1 = require("../permissions");
const authGetPerson = (req, res, next) => {
    const person = req.body.person;
    const targetId = req.params.id;
    if (!(0, permissions_1.CanViewPerson)({ id: person.id, roles: person.roles }, targetId)) {
        return res.status(403).json({
            message: 'You are not authorized to view this person',
        });
    }
    next();
    return null;
};
exports.default = authGetPerson;
//# sourceMappingURL=authGetPerson.js.map
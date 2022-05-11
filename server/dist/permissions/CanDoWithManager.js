"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanDoWithManager = (person) => {
    return person.roles.some(role => role.name === 'Manager');
};
exports.default = CanDoWithManager;
//# sourceMappingURL=CanDoWithManager.js.map
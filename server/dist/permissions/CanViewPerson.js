"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CanDoWithManager_1 = __importDefault(require("./CanDoWithManager"));
const CanViewPerson = (person, targetId) => {
    return (0, CanDoWithManager_1.default)({ roles: person.roles }) || person.id === targetId;
};
exports.default = CanViewPerson;
//# sourceMappingURL=CanViewPerson.js.map
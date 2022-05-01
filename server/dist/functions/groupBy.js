"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const groupBy = (data, getKey) => {
    return data.reduce((prev, curr) => {
        const key = getKey(curr);
        if (!prev[key])
            prev[key] = [];
        prev[key].push(curr);
        return prev;
    }, {});
};
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map
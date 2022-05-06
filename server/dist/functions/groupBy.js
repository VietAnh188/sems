"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByYear = exports.groupByMonth = exports.months = exports.groupByKey = void 0;
const groupByKey = (data, getKey) => {
    return data.reduce((prev, curr) => {
        const key = getKey(curr);
        if (!prev[key])
            prev[key] = [];
        prev[key].push(curr);
        return prev;
    }, {});
};
exports.groupByKey = groupByKey;
exports.months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const groupByMonth = (data, getKey) => {
    return data.reduce((prev, curr) => {
        const key = getKey(curr);
        const month = exports.months[new Date(key).getMonth()];
        return Object.assign(Object.assign({}, prev), { [month]: [...(prev[month] || []), curr] });
    }, {});
};
exports.groupByMonth = groupByMonth;
const groupByYear = (data, getKey) => {
    return data.reduce((prev, curr) => {
        const key = getKey(curr);
        const year = new Date(key).getFullYear().toString();
        return Object.assign(Object.assign({}, prev), { [year]: [...(prev[year] || []), curr] });
    }, {});
};
exports.groupByYear = groupByYear;
//# sourceMappingURL=groupBy.js.map
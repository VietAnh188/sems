"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByYear = exports.groupByMonth = exports.groupByKey = void 0;
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
const groupByMonth = (data, getKey) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return data.reduce((prev, curr) => {
        const key = getKey(curr);
        const month = months[new Date(key).getMonth()];
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
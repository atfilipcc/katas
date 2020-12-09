"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSortedAndHow = void 0;
function isSortedAndHow(array) {
    var sortedAsc = __spreadArrays(array).sort(function (a, b) { return a - b; });
    var sortedDesc = __spreadArrays(array).sort(function (a, b) { return b - a; });
    if (array.every(function (val, i) { return val === sortedAsc[i]; }))
        return 'yes, ascending';
    if (array.every(function (val, i) { return val === sortedDesc[i]; }))
        return 'yes, descending';
    return 'no';
}
exports.isSortedAndHow = isSortedAndHow;
console.log(isSortedAndHow([1, 2, 3]));
console.log(isSortedAndHow([1, 3, 2]));
console.log(isSortedAndHow([3, 2, 1]));
console.log(isSortedAndHow([1, 1, 1]));
//# sourceMappingURL=sorted.js.map
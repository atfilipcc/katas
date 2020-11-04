"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
function sumArray(array) {
    if (array !== null) {
        return array.length > 2 ? array.reduce(function (a, b) { return a + b; }) - Math.min.apply(Math, array) - Math.max.apply(Math, array) : 0;
    }
    else
        return 0;
}
exports.sumArray = sumArray;
console.log(sumArray([]));
//# sourceMappingURL=test.js.map
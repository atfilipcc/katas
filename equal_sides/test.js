"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEvenIndex = void 0;
function findEvenIndex(arr) {
    for (var i = 0; i <= arr.length; i++) {
        var arrLeft = arr.slice(0, i);
        var arrRight = arr.slice(i + 1, arr.length);
        var sum = arrLeft.reduce(function (a, b) { return a + b; }, 0) == arrRight.reduce(function (a, b) { return a + b; }, 0);
        if (sum) {
            return i;
        }
    }
    return -1;
}
exports.findEvenIndex = findEvenIndex;
console.log(findEvenIndex([8, 0]));
//# sourceMappingURL=test.js.map
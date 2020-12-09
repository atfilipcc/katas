"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidWalk = void 0;
function isValidWalk(walk) {
    var arr = __spreadArrays(walk);
    var opposites = {
        n: 's',
        s: 'n',
        w: 'e',
        e: 'w',
    };
    if (walk.length !== 10)
        return false;
    for (var i = arr.length; i >= 0; i--) {
        var item = arr[i];
        for (var j = arr.length - 1; j >= 0; j--) {
            if (opposites[item] == arr[j]) {
                arr.splice(i, 1, '0');
                arr.splice(j, 1, '0');
                break;
            }
        }
    }
    if (arr.every(function (value) { return value === '0'; }))
        return true;
    return false;
}
exports.isValidWalk = isValidWalk;
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'w'])); // false
console.log(isValidWalk(['e', 's', 'e', 's', 'n', 'w', 'n', 's', 'n', 'w'])); //true
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // false
console.log(isValidWalk(['w'])); // false
//# sourceMappingURL=ten.js.map
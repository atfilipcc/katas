"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    return Number(n.toString()
        .split('')
        .map(function (i) { return Number(i); })
        .sort(function (a, b) { return b - a; })
        .join(''));
}
exports.descendingOrder = descendingOrder;
console.log(descendingOrder(993283928));
console.log(descendingOrder(123456789));
console.log(descendingOrder(1201));
//# sourceMappingURL=desc.js.map
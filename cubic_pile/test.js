"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNb = void 0;
function findNb(m) {
    var n = 0;
    while (m > 0) {
        console.log(m);
        m -= Math.pow(n++, 3);
    }
    if (m === 0)
        return n;
    return -1;
}
exports.findNb = findNb;
console.log(findNb(4183059834009));
//# sourceMappingURL=test.js.map
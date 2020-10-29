"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = void 0;
function xo(str) {
    var oCount = 0;
    var xCount = 0;
    for (var i = 0; i < str.length; i++) {
        var iValue = str[i].toLowerCase();
        if (iValue === 'x')
            xCount++;
        if (iValue === 'o')
            oCount++;
    }
    return oCount === xCount;
}
exports.xo = xo;
console.log(xo('xxoOo'));
//# sourceMappingURL=test.js.map
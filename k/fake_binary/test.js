"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeBin = void 0;
exports.fakeBin = function (x) {
    var finalString = '';
    for (var i = 0; i < x.length; i++) {
        if (parseInt(x[i], 0) >= 5) {
            finalString += '1';
        }
        else {
            finalString += '0';
        }
    }
    return finalString;
};
console.log(exports.fakeBin('54589384938'));
//# sourceMappingURL=test.js.map
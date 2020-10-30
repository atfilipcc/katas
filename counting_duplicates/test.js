"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
    var duplicates = [];
    var items = [];
    for (var i = 0; i < text.length; i++) {
        var item = text[i].toLowerCase();
        if (items.indexOf(item) > -1 && duplicates.indexOf(item) === -1) {
            items = __spreadArrays(items, [item]);
            duplicates = __spreadArrays(duplicates, [item]);
        }
        else {
            items = __spreadArrays(items, [item]);
        }
    }
    return duplicates.length;
}
exports.duplicateCount = duplicateCount;
console.log(duplicateCount('Indivisibility'));
//# sourceMappingURL=test.js.map
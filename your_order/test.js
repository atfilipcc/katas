"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
function order(words) {
    var wordsArray = words.split(' ');
    var newArr = wordsArray.sort(function (a, b) {
        var numA = Number(a.match(/[1-9]/));
        var numB = Number(b.match(/[1-9]/));
        return numA - numB;
    });
    return newArr.join(' ');
}
exports.order = order;
console.log(order('is2 Thi1s T4est 3a'));
//# sourceMappingURL=test.js.map
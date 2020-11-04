"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var counter = 0;
        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str[i]) > -1) {
                counter++;
            }
        }
        return counter;
    };
    return Kata;
}());
exports.Kata = Kata;
var kata = Kata;
console.log(kata.getCount('you had me at hello'));
//# sourceMappingURL=test.js.map
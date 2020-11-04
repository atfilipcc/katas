"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
var countOccurrences = function (arr, val) { return arr.reduce(function (a, v) { return (v === val ? a + 1 : a); }, 0); };
function duplicateEncode(word) {
    var finalString = '';
    var wordArr = word.toLowerCase().split('');
    for (var i = 0; i < word.length; i++) {
        countOccurrences(wordArr, word[i].toLowerCase()) > 1 ? finalString += ')' : finalString += '(';
    }
    return finalString;
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode('recede'));
//# sourceMappingURL=test.js.map
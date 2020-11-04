"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirReduc = void 0;
var opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "WEST": "EAST",
    "EAST": "WEST"
};
function dirReduc(arr) {
    var i = arr.length - 1;
    for (i; i >= 0; i--) {
        for (var j = i - 1; j >= 1; j--) {
            if (opposites[arr[i]] == arr[j]) {
                var jIndex = arr.indexOf(arr[j]);
                var iIndex = arr.indexOf(arr[i]);
                if (jIndex >= 0 && iIndex >= 0) {
                    arr.splice(arr.indexOf(arr[i], 1));
                    arr.splice(arr.indexOf(arr[j], 1));
                }
            }
        }
    }
    return arr;
}
exports.dirReduc = dirReduc;
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
// For hver retning i array
// Loop gjennom de resterende retningene for å se om det er en motsatt
//# sourceMappingURL=test.js.map
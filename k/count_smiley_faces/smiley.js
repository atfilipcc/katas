"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSmileys = void 0;
//return the total number of smiling faces in the array
function countSmileys(arr) {
    var smileys = 0;
    var valid = {
        eyes: [';', ':'],
        nose: ['-', '~'],
        smile: [')', 'D'],
    };
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (valid.eyes.includes(item[0])) {
            if (valid.smile.includes(item[1])) {
                smileys++;
            }
            else if (valid.nose.includes(item[1])) {
                if (valid.smile.includes(item[2])) {
                    smileys++;
                }
            }
        }
    }
    return smileys;
}
exports.countSmileys = countSmileys;
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
//# sourceMappingURL=smiley.js.map
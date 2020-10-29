"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.race = function (v1, v2, g) {
        ;
        var time = g / (v2 - v1);
        var h = Math.floor(time);
        var m = Math.floor(time * 60) % 60;
        var s = Math.floor(time * 60 * 60) % 60;
        ;
        return [h, m, s];
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.race(720, 850, 70));
//# sourceMappingURL=test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.gps = function (s, x) {
        var avgSpeeds = [];
        if (x.length <= 1)
            return 0;
        for (var i = 0; i < x.length - 1; i++) {
            avgSpeeds.push((3600 * (x[i + 1] - x[i])) / s);
        }
        return Math.floor(avgSpeeds.sort(function (a, b) { return b - a; })[0]);
    };
    return G964;
}());
exports.G964 = G964;
var speed = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
console.log(G964.gps(15, speed));
//# sourceMappingURL=test.js.map
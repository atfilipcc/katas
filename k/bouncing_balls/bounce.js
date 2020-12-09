"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bouncingBall = void 0;
function bouncingBall(h, bounce, window) {
    if (h <= window || h <= 0 || bounce <= 0 || bounce >= 1)
        return -1;
    var bounces = 0;
    var height = h;
    while (height > window) {
        bounces++;
        height = height * bounce;
        if (height > window)
            bounces++;
    }
    return bounces;
}
exports.bouncingBall = bouncingBall;
console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(300000000000000000000000000000000000000000000000000000000, 0.25, 150));
console.log(bouncingBall(4, 0.25, 1));
console.log(bouncingBall(40, 1, 10));
//# sourceMappingURL=bounce.js.map
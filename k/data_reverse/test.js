var dataReverse = function (data) {
    var matches = data.join('').match(/[0-9]{8}/g);
    return matches ? matches.reverse().join('').split('').map(function (x) { return parseInt(x, 10); }) : [];
};
//# sourceMappingURL=test.js.map
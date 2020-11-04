function arrayDiff(a, b) {
    var ans = a.filter(function (number) {
        return !b.includes(number.toString());
    });
    return ans;
}
//# sourceMappingURL=test.js.map
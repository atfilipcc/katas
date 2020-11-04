function twoSum(numbers, target) {
    var potentialNumber = [];
    for (var i = 0; i < numbers.length; i++) {
        potentialNumber = [numbers[i], i];
        for (var j = i + 1; j < numbers.length; j++) {
            if (potentialNumber[0] + numbers[j] === target) {
                return [potentialNumber[1], j];
            }
        }
    }
}
//# sourceMappingURL=test.js.map
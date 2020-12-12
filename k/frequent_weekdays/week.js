"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFrequentDays = exports.getMax = exports.leapYear = void 0;
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
exports.leapYear = leapYear;
function getMax(object) {
    return Object.keys(object).filter(function (x) {
        return object[x] == Math.max.apply(null, Object.values(object));
    });
}
exports.getMax = getMax;
;
function mostFrequentDays(year) {
    var weekdaysMap = { 'Monday': 0, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 0, 'Friday': 0, 'Saturday': 0, 'Sunday': 0 };
    var firstDay = new Date("January, 1, " + year + " 00:00:01").getDay() - 1;
    var leapValue = leapYear(year) ? 0 : 1;
    for (var index = firstDay; index <= 365 + firstDay - leapValue; index++) {
        var nameOfDay = Object.keys(weekdaysMap)[(index % 7 + 7) % 7];
        weekdaysMap[nameOfDay]++;
    }
    var sorted = getMax(weekdaysMap);
    return sorted;
}
exports.mostFrequentDays = mostFrequentDays;
console.log(mostFrequentDays(2185));
console.log(mostFrequentDays(2016));
console.log(mostFrequentDays(1986));
console.log(mostFrequentDays(1968));
// [ 'Saturday' ]
// [ 'Friday', 'Saturday' ]
// [ 'Wednesday' ]
// [ 'Monday', 'Tuesday' ]
//# sourceMappingURL=week.js.map
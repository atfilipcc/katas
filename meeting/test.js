"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meeting = void 0;
function meeting(s) {
    var movedNames = s === null || s === void 0 ? void 0 : s.split(';');
    for (var i = 0; i < movedNames.length; i++) {
        var element = movedNames[i];
        var first = element.substr(0, element.indexOf(':')).toUpperCase();
        var last = element.substr(element.indexOf(':') + 1).toUpperCase();
        movedNames[i] = "(" + last + ", " + first + ")";
    }
    return movedNames.sort(function (a, b) { return a.localeCompare(b); }).join('');
}
exports.meeting = meeting;
console.log(meeting('Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'));
//# sourceMappingURL=test.js.map
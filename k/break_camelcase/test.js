function solution(str) {
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += ' ';
        }
        newString += str[i];
    }
    return newString;
}
//# sourceMappingURL=test.js.map
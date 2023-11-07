/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var num = 0;
    var S = 0;
    var L = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            L++;
        } else {
            S++;
        }
        if (S === L) {
            num++;
            S = 0;
            L = 0;
        }
    }
    return num;
};
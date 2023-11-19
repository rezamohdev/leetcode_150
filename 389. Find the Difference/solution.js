/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var num = 0;
    for (var i = 0; i < t.length; i++) {
        num += t[i].charCodeAt(0);
    }
    for (var j = 0; j < s.length; j++) {
        num -= s[j].charCodeAt(0);
    }
    return String.fromCharCode(num);
};
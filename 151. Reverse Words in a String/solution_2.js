/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var string = s.split(" ");
    var result = '';
    for (var i = string.length - 1; i >= 0; i--)
        if (string[i]) result += (result ? " " : "") + string[i];
    return result;
};
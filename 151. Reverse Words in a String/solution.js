/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    return str.split(' ').filter(s => s !== '').reverse().join(' ');
};
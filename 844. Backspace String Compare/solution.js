/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    buildString(s) === buildString(t);
};

var buildString = function (str) {
    const stack = [];
    for (const c of s) {
        if (c != '#') {
            stack.push(c)
        } else if (stack.length !== 0) {
            stack.pop();
        }
    }
    stack.join("")
}
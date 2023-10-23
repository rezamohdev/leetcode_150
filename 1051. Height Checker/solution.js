/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    var arr = Array.from(heights).sort((a, b) => a - b);
    var count = 0;
    for (var i = 0; i < heights.length; i++) {
        if (heights[i] !== arr[i]) {
            count += 1;
        }
    }
    return count;
};
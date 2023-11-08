/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    var map = Array(100).fill(0);
    for (var i = 0; i < nums.length; i++) {
        map[nums[i] - 1]++;
    }
    var res = 0;
    for (var j = 0; j < map.length; j++) {
        res += helper(map[j] - 1);
    }
    return res;
};

var helper = function (num) {
    return num * (1 + num) / 2;
};
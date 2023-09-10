/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length == 0)
        return 0
    let firstPoint = 0;
    for (let secondPoint = firstPoint; secondPoint < nums.length; secondPoint++)
        if (nums[secondPoint] !== val)
            nums[firstPoint++] = nums[secondPoint]


    return firstPoint;
};
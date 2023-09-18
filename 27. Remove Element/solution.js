/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// new code 10.0.0.197:808
var removeElement = function (nums, val) {
    if (nums.length == 0)
        return 0
    let firstPoint = 0;
    for (let secondPoint = firstPoint; secondPoint < nums.length; secondPoint++)
        if (nums[secondPoint] !== val)
            nums[firstPoint++] = nums[secondPoint]


    return firstPoint;

};

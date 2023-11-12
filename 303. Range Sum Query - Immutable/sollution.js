/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.leftSum = Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        this.leftSum[i] = (this.leftSum[i - 1] || 0) + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.leftSum[right] - (this.leftSum[left - 1] || 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var maximumScore = function (nums, k) {
    let stack = [];
    let ans = 0;
    nums.push(0);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && (i === nums.length - 1 || nums[i] < nums[stack[stack.length - 1]])) {
            let h = nums[stack.pop()];
            let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            if ((!stack.length || stack[stack.length - 1] <= k) && i - 1 >= k)
                ans = Math.max(ans, h * w);
        }
        stack.push(i);
    }

    return ans;
};
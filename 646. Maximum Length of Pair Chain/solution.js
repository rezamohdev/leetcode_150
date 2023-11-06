/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[0] - b[0]);
    var dp = Array(pairs.length);
    for (var i = pairs.length - 1; i >= 0; i--) {
        var j = i + 1;
        while (j < pairs.length && pairs[j][0] <= pairs[i][1]) j++;
        dp[i] = Math.max(
            dp[i + 1] || 0,
            1 + (dp[j] || 0),
        );
    }
    return dp[0];
};
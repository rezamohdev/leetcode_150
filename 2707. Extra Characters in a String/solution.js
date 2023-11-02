/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    var map = dictionary.reduce((res, item) => {
        res[item] = 1;
        return res;
    }, {});
    var dp = Array(s.length);
    for (var i = s.length - 1; i >= 0; i--) {
        dp[i] = (dp[i + 1] || 0) + 1;
        var str = '';
        for (var j = i; j < s.length; j++) {
            str += s[j];
            if (map[str]) {
                dp[i] = Math.min(dp[i], dp[j + 1] || 0);
            }
        }
    }
    return dp[0];
};
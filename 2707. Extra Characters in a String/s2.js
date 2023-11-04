class Solution {
    minExtraChar(s, dictionary) {
        const n = s.length;
        const dictionarySet = new Set(dictionary);

        let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        dp[0] = 0;

        for (let i = 1; i <= n; i++)
            for (let j = 0; j < i; j++)
                if (dictionarySet.has(s.substring(j, i)))
                    dp[i] = Math.min(dp[i], dp[j]);
                else
                    dp[i] = Math.min(dp[i], dp[j] + i - j);

        return dp[n];
    }
}
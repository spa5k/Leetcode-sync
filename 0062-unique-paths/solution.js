/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    dp[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = dp[i][j];
            if (i + 1 <= m) {
                dp[i + 1][j] += current;
            }

            if (j + 1 <= n) {
                dp[i][j + 1] += current;
            }
        }
    }

    return dp[m][n];
};

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const dp = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j === 0 && !dp[i - j]) {
                dp[i] = true
                break;
            }
        }
    }

    return !!dp[n]
};

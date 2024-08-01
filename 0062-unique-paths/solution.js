/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, memo = {}) {
    const key = m + ',' + n;
    if (memo[key]) return memo[key];
    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return m * n;

    const res = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    memo[key] = res;
    return res;
};

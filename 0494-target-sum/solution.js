/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const totalSum = nums.reduce((a, b) => a + b, 0);

    if (target > totalSum || target < -totalSum) return 0;

    const offset = totalSum;

    let dp = new Array(2 * totalSum + 1).fill(0);
    dp[offset] = 1;

    for (let num of nums) {
        const nextDp = new Array(2 * totalSum + 1).fill(0);

        for (let sum = 0; sum < dp.length; sum++) {
            if (dp[sum] != 0) {
                nextDp[sum + num] += dp[sum];
                nextDp[sum - num] += dp[sum];
            }
        }
        dp = nextDp;
    }

    return dp[target + offset] || 0;
};

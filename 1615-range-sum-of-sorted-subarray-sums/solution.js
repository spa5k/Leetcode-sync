/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 1e9 + 7;
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(nums[i]);
        let last = nums[i];
        for (let j = i + 1; j < n; j++) {
            arr.push(last + nums[j]);
            last = last + nums[j];
        }
    }

    arr.sort((a, b) => a - b);

    let sum = 0;
    for (let i = left - 1; i < right; i++) {
        // Just do modulo here, no need to manage it elsewhere, otherwise the result gets too big.
        // Javascript can handle it, but not other languages.
        sum = (sum + arr[i]) % MOD;
    }
    return sum;
};

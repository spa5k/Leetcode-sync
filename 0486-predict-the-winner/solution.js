/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    function maxScore(l, r) {
        if (l === r) return nums[l];

        const pickLeft = nums[l] - maxScore(l + 1, r);
        const pickRight = nums[r] - maxScore(l, r - 1);

        return Math.max(pickLeft, pickRight);
    }

    return maxScore(0, nums.length - 1) >= 0;
};

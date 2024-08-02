/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    const n = nums.length;
    let totalOnes = 0;

    // Count the total number of 1s in the array
    for (const num of nums) {
        if (num === 1) {
            totalOnes++;
        }
    }

    // If there are no 1s or all elements are 1s, no swaps are needed
    if (totalOnes === 0 || totalOnes === n) return 0;

    // Extend the array to handle circular behavior
    const extendedNums = nums.concat(nums);
    let maxOnesInWindow = 0;
    let currentOnesInWindow = 0;

    // Calculate max ones in a window of size equal to totalOnes
    for (let i = 0; i < extendedNums.length; i++) {
        if (i >= totalOnes) {
            // Slide the window
            if (extendedNums[i - totalOnes] === 1) {
                currentOnesInWindow--;
            }
        }
        if (extendedNums[i] === 1) {
            currentOnesInWindow++;
        }
        if (i >= totalOnes - 1) {
            maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow);
        }
    }

    // The minimum number of swaps needed is the total number of 1s minus the maximum number of 1s in a valid window
    return totalOnes - maxOnesInWindow;
};

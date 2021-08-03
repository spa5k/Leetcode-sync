/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const obj = {};

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};
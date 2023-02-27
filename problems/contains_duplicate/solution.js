/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map[element] === 1) {
      return true;
    }
    map[element] = 1;
  }
  return false;
};
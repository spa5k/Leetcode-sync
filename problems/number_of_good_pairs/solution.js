/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = 0;
  nums.forEach((number, index) => {
    index = nums.indexOf(number, index + 1);
    while (index > 0) {
      result++;
      index = nums.indexOf(number, index + 1);
    }
  });
  return result;
};
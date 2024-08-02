/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// const removeElement = (nums, val) => {
//   let length = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[length++] = nums[i];
//     }
//   }
//   nums.length = length;
// };

const removeElement = (nums, val) => {
  let p1 = 0;
  let p2 = 0;
  while (p2 < nums.length) {
    if (nums[p2] !== val) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1;
};

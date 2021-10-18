/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;

  for (const element of nums) {
    let temp = Math.max(element + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
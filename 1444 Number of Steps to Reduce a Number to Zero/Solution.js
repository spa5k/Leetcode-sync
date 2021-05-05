/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num) {
    if (num % 2 === 1) {
      num--;
    } else {
      num /= 2;
    }
    count++;
  }
  return count;
};
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let base = 0;
  for (let g of gain) {
    base += g;
    max = Math.max(max, base);
  }
  return max;
};
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((i) => i.reduce((b, c) => (b += c), 0)));
};
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const aBinary = `0b${a}`;
  const bBinary = `0b${b}`;
  const sum = BigInt(aBinary) + BigInt(bBinary);
  return sum.toString(2);
};
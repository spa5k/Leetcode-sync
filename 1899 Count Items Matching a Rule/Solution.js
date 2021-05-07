/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0;
  let ruleKeyIndex = 0;

  if (ruleKey === "name") {
    ruleKeyIndex = 2;
  } else if (ruleKey === "color") {
    ruleKeyIndex = 1;
  }

  items.map((a) => {
    if (a[ruleKeyIndex] === ruleValue) {
      count++;
    }
  });
  return count;
};
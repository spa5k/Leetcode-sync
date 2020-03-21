/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs.length) return '';

  const sortedStrings = strs.sort();
  let i = 0;
  let firstString = sortedStrings[0];
  let lastString = sortedStrings[strs.length - 1];

  while (
    i < firstString.length &&
    firstString.charAt(i) === lastString.charAt(i)
  ) {
    i++;
  }
  return firstString.slice(0, i);
};
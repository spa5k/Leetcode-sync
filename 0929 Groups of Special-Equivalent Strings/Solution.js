/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  const groups = new Set();

  for (const word of A) {
    const counts = new Array(52).fill(0);

    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;

      if (i % 2 === 0) counts[index]++;
      else counts[index + 26]++;
    }

    const key = counts.join("#");
    groups.add(key);
  }
  return groups.size;
};

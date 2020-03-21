/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let n1 = map[s.charAt(i)];
    let n2 = map[s.charAt(i + 1)];

    if (n2 > n1) {
      answer = answer + n2 - n1;
      i++;
    } else answer = answer + n1;
  }
  return answer;
};
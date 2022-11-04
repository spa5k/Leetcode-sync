/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const revVowels = []
  for (let ch of s) {
    if (vowels.includes(ch.toLowerCase())) {
      revVowels.push(ch)
    }
  }
  s = s.split('')
  let last = revVowels.length - 1
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      s[i] = revVowels[last--]
    }
  }
  return s.join('');
};
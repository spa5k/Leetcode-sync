/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = s => (s=s.replace(/[^0-9a-z]/gi,'').toLowerCase())===s.split('').reverse().join('');
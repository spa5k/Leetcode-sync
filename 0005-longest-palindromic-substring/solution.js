/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) {
        return '';
    }

    let maxString = '';

    function checkPalindromeFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = checkPalindromeFromCenter(i, i);
        if (oddPalindrome.length > maxString.length) {
            maxString = oddPalindrome;
        }
        const evenPalindrome = checkPalindromeFromCenter(i, i + 1);

        if (evenPalindrome.length > maxString.length) {
            maxString = evenPalindrome;
        }
    }

    return maxString;
};

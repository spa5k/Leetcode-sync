/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for (let x = 1; x <= n; x *= 4) {
        if (x === n) {
            return true
        }
    }
    return false
};
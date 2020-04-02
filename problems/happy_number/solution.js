/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n)=> {
   const arr = n.toString().split('').reduce(((a,b) => a + Math.pow(b,2)), 0);
    if (arr === 1) return true;
    if (arr === 4) return false;
    else return isHappy(arr);
};
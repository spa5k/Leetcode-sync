/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(t){let a=0;const e=[...Array(t.length)].map(a=>Array(t[0].length));for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)0===n||0===r?"1"===t[n][r]?(e[n][r]=1,a=Math.max(a,1)):e[n][r]=0:"1"===t[n][r]?(e[n][r]=Math.min(e[n][r-1],e[n-1][r],e[n-1][r-1])+1,a=Math.max(a,e[n][r])):e[n][r]=0;return a**2}
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence=(t,e)=>{const l=[];let n=t.length,r=e.length;for(let t=0;t<=n;t++)l[t]=new Array(r+1).fill(0);for(let o=1;o<=n;o++)for(let n=1;n<=r;n++)t.charAt(o-1)!=e.charAt(n-1)?l[o][n]=Math.max(l[o-1][n],l[o][n-1]):l[o][n]=l[o-1][n-1]+1;return l[n][r]};
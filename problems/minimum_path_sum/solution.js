/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum=function(t){if(!t||!t.length)return 0;let e=[[t[0][0]]],n=t.length,r=t[0].length;for(let n=1;n<r;n++)e[0][n]=e[0][n-1]+t[0][n];for(let r=1;r<n;r++)e[r]=[],e[r][0]=e[r-1][0]+t[r][0];for(let l=1;l<n;l++)for(let n=1;n<r;n++)e[l][n]=Math.min(e[l][n-1],e[l-1][n])+t[l][n];return e[n-1][r-1]};
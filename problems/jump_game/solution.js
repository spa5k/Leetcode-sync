/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump=t=>{let e=0;for(let n=0;n<t.length;n++){if(n>e)return!1;if(n+t[n]>=t.length-1)return!0;e=Math.max(e,n+t[n])}};
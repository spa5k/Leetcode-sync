/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let rangeBitwiseAnd=(e,r,t=0)=>{for(let n=31;n>0;--n)2**n>r&&e>=2**(n-1)&&(t|=2**(n-1),e-=2**(n-1),r-=2**(n-1));return t};
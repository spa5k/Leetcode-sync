/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum=(t,e)=>{const r=new Map([[0,1]]);let n=0,o=0;for(let s of t)n+=s,o+=r.get(n-e)||0,r.set(n,(r.get(n)||0)+1);return o};
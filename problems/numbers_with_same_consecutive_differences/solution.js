/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff=function(n,e){let t=new Set([0,1,2,3,4,5,6,7,8,9]);for(let o=2;o<=n;o++){const n=new Set;for(const o of t){const t=o%10,f=t+e,c=t-e;o>0&&f<10&&n.add(10*o+f),o>0&&c>=0&&n.add(10*o+c)}t=n}return[...t]};
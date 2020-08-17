/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies=function(r,e){let i=new Array(e).fill(0),n=0,t=1;for(;r>0;)r<=t&&(t=r),i[n]+=t,r-=t,n=(n+1)%e,t++;return i};
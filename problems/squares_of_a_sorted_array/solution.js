/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const x= nums.map((i)=>i*i);
    return x.sort((a,b)=>a-b)
};
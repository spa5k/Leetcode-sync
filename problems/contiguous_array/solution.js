/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
    var max = 0, count = {}, discrepency = 0, ind = 0;
    if(!Array.isArray(nums)) return;
    while(ind < nums.length){
        discrepency += (nums[ind] == 1 ? 1 : -1);
        if(discrepency === 0) max = Math.max(max, ind + 1);
        else if(discrepency in count)
            max = Math.max(max, ind - count[discrepency]);
        else
            count[discrepency] = ind;
        ind ++;
    }
    return max;
};
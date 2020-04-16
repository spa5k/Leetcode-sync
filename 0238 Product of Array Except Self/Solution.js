/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums)=> {
    const sol = new Array(nums.length).fill(1);
    
    let mult = 1;
    
    for (let i = 0; i < nums.length; i++) {
        sol[i] *= mult;
        mult *= nums[i];
    }
    
    mult = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        sol[j] *= mult;
        mult *= nums[j];
    }
    
    return sol;
};
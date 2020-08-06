/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = [];
    
    for (var i = 0; i < nums.length; ++ i) {
        var entry = Math.abs(nums[i]) - 1;
        if (nums[entry] < 0) {
            result.push(Math.abs(nums[i]));
        }
        nums[entry] *= -1;
    }
    
    return result;
};
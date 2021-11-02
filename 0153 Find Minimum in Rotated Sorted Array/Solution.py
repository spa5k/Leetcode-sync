class Solution:
    def findMin(self, nums: List[int]) -> int:
        res = nums[0]

        left, right = 0, len(nums)-1

        while left <= right:
            # if sub array is already sorted, then update the result and break
            if nums[left] < nums[right]:
                res = min(res, nums[left])
                break
            mid = (left+right)//2
            res = min(res, nums[mid])
            # if mid is greater than equal to all the left, so we search right
            if nums[mid] >= nums[left]:
                left = mid+1
            else:
                # else search left
                right = mid-1
        return res

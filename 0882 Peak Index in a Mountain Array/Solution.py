class Solution:
    def peakIndexInMountainArray(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)-1

        while True:
            middle = (left+right)//2
            middle_ele = nums[middle]

            if nums[middle-1] < nums[middle] > nums[middle+1]:
                return middle
            if middle_ele < nums[middle+1]:
                left = middle+1
            else:
                right = middle

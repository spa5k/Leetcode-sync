class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []

        for num in nums:
            absValue = abs(num)

            if nums[absValue-1] < 0:
                res.append(absValue)
            else:
                nums[absValue-1] *= -1

        return res

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)

        currMin, currMax = 1, 1

        for n in nums:
            if n == 0:
                currMax, currMin = 1, 1
                continue
            tmp = currMax*n
            currMax = max(tmp, n*currMin, n)
            currMin = min(tmp, n*currMin, n)
            res = max(res, currMax)
        return res
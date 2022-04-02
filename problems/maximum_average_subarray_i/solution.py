class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sub = sum(nums[:k])
        res = sub

        for r in range(k, len(nums)):
            sub += (
                nums[r] - nums[r - k]
            )  # window element added from one and subtracted from the other end
            res = max(sub, res)
        return res / k
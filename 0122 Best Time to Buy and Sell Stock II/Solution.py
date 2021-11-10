class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        last, result = prices[0], 0

        for p in prices:
            if p > last:
                result += p - last
            last = p

        return result
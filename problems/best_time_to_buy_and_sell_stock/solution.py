class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if not prices:
            return 0

        highest_profit = 0

        current_lowest = prices[0]

        for i in range(1, len(prices)):
            highest_profit = max(highest_profit, prices[i] - current_lowest)
            current_lowest = min(current_lowest, prices[i])
        return highest_profit
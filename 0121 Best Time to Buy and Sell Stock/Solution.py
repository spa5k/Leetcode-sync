class Solution:
  def maxProfit(self, prices: List[int]) -> int:
      left = 0
      right = 1

      max_profit = 0
      for i in range(len(prices) - 1):
          cur_left = prices[left]
          cur_right = prices[right]
          cur_profit = cur_right - cur_left

          if cur_left > cur_right:
              left = right
              right += 1
              continue
          max_profit = max(max_profit, cur_profit)

          right += 1
      return max_profit
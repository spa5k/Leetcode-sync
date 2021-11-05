class Solution:
    def arrangeCoins(self, n: int) -> int:
        k = total = 1
        while total <= n:
            k += 1
            total += k
        return k-1
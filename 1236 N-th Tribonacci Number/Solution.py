class Solution:
    def tribonacci(self, n: int) -> int:
        list = [0, 1, 1]
        if n < 2:
            return list[n]
                   
        for i in range(n-2):
            list.append(sum(list))
            list.pop(0)
        return list.pop()
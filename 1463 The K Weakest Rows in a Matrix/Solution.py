class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        heap = []

        for i, row in enumerate(mat):
            r = self.bs(row)
            heapq.heappush(heap, (-r, -i, i))
        while len(heap) > k:
            heapq.heappop(heap)
        res = [0]*k
        for i in range(k-1, -1, -1):
            res[i] = heapq.heappop(heap)[2]
        return res

    def bs(self, row):
        left, right = 0, len(row)
        while left < right:
            mid = left + (right-left)//2
            if row[mid] == 1:
                left = mid + 1
            else:
                right = mid
        return left

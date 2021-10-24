class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        # initial max = -1 (last value is -1)
        # reverse iteration of array
        # new max=max(oldMax,arr[i])
        rightMax = -1

        for i in range(len(arr)-1, -1, -1):
            new_max = max(rightMax, arr[i])
            arr[i] = rightMax
            rightMax = new_max
        return arr


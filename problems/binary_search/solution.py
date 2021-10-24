class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums)-1

        while low <= high:
            middle = int(low + (high - low)/2)
            middle_element = nums[middle]

            if middle_element == target:
                return middle

            if middle_element < target:
                low = middle+1
            else:
                high = middle-1
        return -1

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers)-1

        while left <= right:
            sum_of_arr = numbers[left]+numbers[right]
            if sum_of_arr == target:
                return [left+1, right+1]

            if sum_of_arr < target:
                left += 1
            else:
                right -= 1

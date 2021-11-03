class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        for row in matrix:
            l = 0
            r = len(row)-1

            if row[l] <= target <= row[r]:
                while l <= r:
                    # it means that the value is inside
                    middle = (l+r)//2

                    if target == row[middle]:
                        return True

                    if target < row[middle]:
                        r = middle-1
                    else:
                        l = middle+1

    # def binarySearch(nums, target):
    #     left = 0
    #     right = len(nums)-1

    #     while left <= right:

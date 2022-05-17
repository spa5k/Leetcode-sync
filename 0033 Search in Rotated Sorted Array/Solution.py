from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1

        while l <= r:
            mid = (l+r)//2

            if nums[mid] == target:
                return mid
            # This is strictly increasing sub array
            elif nums[mid] >= nums[l]:
                if target <= nums[mid] and target >= nums[l]:
                    r = mid-1
                else:
                    l = mid+1
            else:
                if target >= nums[mid] and target <= nums[r]:
                    l = mid+1
                else:
                    r = mid-1
        return -1

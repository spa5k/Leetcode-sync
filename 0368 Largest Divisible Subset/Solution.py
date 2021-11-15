class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        # We'll traverse values in nums in ascending order
        nums.sort()
        # Ordered (by length) list of valid subsets that are largest subset candidates
        subsets = []

        # Add max-length subset for each value
        for i, num in enumerate(nums):
            # Find the biggest subset we can add num to, and add this new subset to subsets (maintaining order)
            for j in range(i-1, -1, -1):
                # If satisfies divisibility, insert into subsets (as per size, 1 bigger than previous subset)
                if not num%subsets[j][-1]:
                    # Location of where to insert new extended subset (Alt.: Could binary search for it)
                    k = next(filter(lambda k: len(subsets[j])!=len(subsets[k]), range(j+1, i)), i)
                    subsets.insert(k, subsets[j]+[num])
                    break
            else:
                # num can't be added as an extension to any subset, create a blank one for it
                subsets.insert(0, [num])

        return subsets[-1]
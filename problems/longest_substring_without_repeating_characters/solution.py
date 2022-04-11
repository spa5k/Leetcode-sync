class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char = set()
        left = 0
        res = 0

        for right in range(len(s)):
            letter=s[right]

            while letter in char:
              char.remove(s[left])
              left+=1
            char.add(letter)
            res=max(res,right-left+1)
        return res
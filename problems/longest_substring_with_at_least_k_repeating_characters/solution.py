class Solution:
    def longestSubstring(self, str: str, k: int):
        from collections import Counter

        total_uniques = len(Counter(str))
        ans = 0

        # At each iteration, we look for the lengthiest subsrtring with a specific length (no_uniques)
        for no_uniques in range(1, total_uniques + 1):
            # each iteration starts with an empty sub and start_index and end_index at 0
            s = 0
            e = 0
            curr_sub = Counter()
            while e < len(str):
                curr_sub[str[e]] += 1  # first add the element at right index to the sub

                while (
                    len(curr_sub) > no_uniques
                ):  # if the number of unique characters in current sub exceedes no_uniques
                    curr_sub[str[s]] -= 1  # removes elements from the left side
                    if curr_sub[str[s]] == 0:
                        del curr_sub[str[s]]
                    s += 1

                for key in curr_sub:
                    if curr_sub[key] < k:
                        break
                else:
                    ans = max(ans, e - s + 1)
                e += 1
        return ans
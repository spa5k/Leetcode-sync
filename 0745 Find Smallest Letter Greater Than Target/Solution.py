class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        letters_length = len(letters)
        low = 0
        high = letters_length-1

        # this means that the target is outside the letters given in the array
        # so the next smallest letter to it will be the first low letter
        if target < letters[low] or target >= letters[high]:
            return letters[low]

        while low <= high:
            middle = (low+high)//2
            candidate = letters[middle]

            if target < candidate:
                high = middle-1

            if target >= candidate:
                low = middle+1

        return letters[low]
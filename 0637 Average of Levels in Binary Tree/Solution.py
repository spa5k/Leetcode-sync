# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        traversed = [root]
        average = []

        while traversed:
            current_avg = sum(
                (node.val for node in traversed if node))/len(traversed)
            average.append(current_avg)
            nex = [child for node in traversed for child in (
                node.left, node.right) if child]
            traversed = nex
        return average

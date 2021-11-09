class TrieNode:
    # Trie node class
    def __init__(self, val):
        self.val=val
        self.children = {}
        self.nums= 0

class Trie:
    def __init__(self):
        self.root = TrieNode(None)

    def insert(self, word):
        p=self.root
        for c in word:
            if c not in p.children:
                p.children[c] = TrieNode(c)
            p = p.children[c]
        p.nums += 1
    
    def search(self, puzzle):
        def dfs(node):
            rst=0
            rst += node.nums
            for k, nodec in node.children.items():
                if k in puzzle:
                    rst+=dfs(nodec)
            return rst
        return dfs(self.root)


class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
        words = [sorted(set(w)) for w in words]
        puzzles = [(p[0], set(p)) for p in puzzles]
        
        dic = defaultdict(Trie)
        for w in words:
            for c in w:
                dic[c].insert(w)

        rsts = []
        for f, puzzle in puzzles:
            rst = 0
            rsts.append(dic[f].search(puzzle))
            
        return rsts
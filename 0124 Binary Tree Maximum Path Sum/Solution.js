/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root)=> {
	// keep max negative values to deal with negatives
    let max = -Infinity;
    function dfs(node) {
        if(!node) {
            return -Infinity
        }
        
        //call recursiverly dfs on left and right.
        let leftSum = dfs(node.left)
        let rightSum = dfs(node.right)
        //find max of all the possible cases at that particular nodes.
        let current = Math.max(node.val, (node.val+leftSum), (node.val+rightSum), (node.val+rightSum+leftSum))
        //update max
        max = Math.max(current, max)
        
        // return path that parent should take to maximize sum.
        return node.val + Math.max(leftSum, rightSum, 0)
    }
    dfs(root)
    return max
};
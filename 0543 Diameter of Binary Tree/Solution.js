/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = root => {
    let m=0;
    
    function maxDepth(root) {
        if(root === null) return 0;
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        
        m= Math.max(m, left+right);
        return Math.max(left,right)+1;
        
        
    }
    
    maxDepth(root);
    return m;
};
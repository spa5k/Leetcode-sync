/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder=e=>{let r=(t,l)=>{if(e[0]<t||e[0]>l)return null;if(0===e.length)return null;let n=new TreeNode(e.shift());return n.left=r(t,n.val),n.right=r(n.val,l),n};return r(-1/0,1/0)};
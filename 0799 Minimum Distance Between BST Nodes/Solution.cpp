/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
  int res = INT_MAX;
  int pre = -1;
  void inorder(TreeNode *root)
  {
    if (root == nullptr)
    {
      return;
    }
    inorder(root->left);
    if (pre >= 0)
    {
      res = min(res, root->val - pre);
    }
    pre = root->val;
    inorder(root->right);
  }
  int minDiffInBST(TreeNode *root)
  {
    inorder(root);
    return res;
  }
};
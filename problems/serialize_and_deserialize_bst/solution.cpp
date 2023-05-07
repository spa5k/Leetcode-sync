/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec
{
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode *root)
    {
        if (root == nullptr)
            return "(#)";
        string left = serialize(root->left);
        string right = serialize(root->right);
        return "(" + to_string(root->val) + left + right + ")";
    }

    TreeNode *decode(string &data, int &n)
    {
        ++n;
        string curNum = "";
        while (data[n] != ')' && data[n] != '(')
        {
            curNum += data[n];
            ++n;
        }
        TreeNode *root = nullptr;
        if (curNum != "#")
        {
            root = new TreeNode(stoi(curNum));
            if (data[n] == '(')
                root->left = decode(data, n);
            if (data[n] == '(')
                root->right = decode(data, n);
        }
        ++n;
        return root;
    }

    // Decodes your encoded data to tree.
    TreeNode *deserialize(string data)
    {
        int n = 0;
        return decode(data, n);
    }
};
// Your Codec object will be instantiated and called as such:
// Codec* ser = new Codec();
// Codec* deser = new Codec();
// string tree = ser->serialize(root);
// TreeNode* ans = deser->deserialize(tree);
// return ans;
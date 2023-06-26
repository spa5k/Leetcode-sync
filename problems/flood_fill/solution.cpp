class Solution
{
public:
    vector<vector<int>> floodFill(vector<vector<int>> &image, int sr, int sc, int newColor)
    {
        int num_rows = image.size();
        int num_cols = image[0].size();

        vector<vector<bool>> visited(num_rows, vector<bool>(num_cols, false));

        dfs(image, sr, sc, newColor, image[sr][sc], visited);
        return image;
    }

    void dfs(vector<vector<int>> &image, int sr, int sc, int newColor, int baseColor, vector<vector<bool>> &visited)
    {
        int rl = image.size();
        int cl = image[0].size();

        // Base condition for returning.
        if (sc < 0 || sc >= cl || sr < 0 || sr >= rl || image[sr][sc] != baseColor || visited[sr][sc])
        {
            return;
        }

        // Mark the node as visited.
        visited[sr][sc] = true;

        // Perform the desired operations at every node.
        image[sr][sc] = newColor;
        dfs(image, sr + 1, sc, newColor, baseColor, visited);
        dfs(image, sr, sc + 1, newColor, baseColor, visited);
        dfs(image, sr - 1, sc, newColor, baseColor, visited);
        dfs(image, sr, sc - 1, newColor, baseColor, visited);
    }
};
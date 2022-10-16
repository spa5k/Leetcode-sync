class Solution
{
public:
  vector<int> findSmallestSetOfVertices(int n, vector<vector<int>> &edges)
  {
    set<int> seen;
    for (auto &&group : edges)
    {
      int l = group[0];
      int r = group[1];
      seen.insert(l);
    }
    for (auto &&group : edges)
    {

      int r = group[1];
      seen.erase(r);
    }

    vector<int> res;
    for (auto &str : seen)
    {
      res.push_back(str);
    }
    return res;
  }
};
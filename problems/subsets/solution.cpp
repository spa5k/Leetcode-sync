class Solution
{
public:
  vector<vector<int>> subsets(vector<int> &nums)
  {
    vector<vector<int>> output{};
    output.push_back(vector<int>{});

    for (auto &num : nums)
    {
      vector<vector<int>> newSubsets{};
      for (vector<int> curr : output)
      {
        vector<int> subset{curr};
        subset.push_back(num);
        newSubsets.push_back(subset);
      }
      for (vector<int> &curr : newSubsets)
      {
        output.push_back(curr);
      }
    }
    return output;
  }
};
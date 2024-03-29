class Solution
{
public:
  bool containsDuplicate(vector<int> &nums)
  {
    unordered_map<int, int> mp{};
    for (auto &&num : nums)
    {
      if (mp[num])
      {
        return true;
      }
      mp[num]++;
    }
    return false;
  }
};
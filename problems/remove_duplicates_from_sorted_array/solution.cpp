class Solution
{
public:
  int removeDuplicates(vector<int> &nums)
  {
    int length = 0;
    for (auto &&x : nums)
    {
      if (length == 0)
      {
        nums[length++] = x;
      }
      else if (x > nums[length - 1])
      {
        nums[length++] = x;
      }
    }
    return length;
  }
};
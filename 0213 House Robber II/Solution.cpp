class Solution
{
public:
  int rob(vector<int> &nums)
  {
    if (nums.size() == 1)
    {
      return nums[0];
    }
    int r1 = helper(nums, 0, nums.size() - 2);
    int r2 = helper(nums, 1, nums.size() - 1);
    return max(r1, r2);
  }
  int helper(vector<int> &nums, int start, int end)
  {
    int rob1 = 0;
    int rob2 = 0;
    for (int i = start; i <= end; i++)
    {
      int curr = nums[i];
      int temp = max(rob1 + curr, rob2);
      rob1 = rob2;
      rob2 = temp;
    }

    return rob2;
  }
};
class Solution
{
public:
  int heightChecker(vector<int> &heights)
  {
    if (heights.size() < 2)
      return 0;
    vector<int> map(101, 0);
    for (auto &&i : heights)
    {
      map[i]++;
    }
    int res = 0;
    int h_ptr = 1;
    for (auto &&h : heights)
    {
      while (map[h_ptr] == 0)
        h_ptr++;
      if (h != h_ptr)
        res++;
      map[h_ptr]--;
    }
    return res;
  }
};
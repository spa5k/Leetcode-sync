class Solution
{
public:
  int characterReplacement(string s, int k)
  {
    vector<int> count(26);
    int maxCount = 0;

    int first = 0;
    int second = 0;

    int res = 0;

    while (second < s.size())
    {
      count[s[second] - 'A']++;
      maxCount = max(maxCount, count[s[second] - 'A']);
      if (second - first + 1 - maxCount > k)
      {
        count[s[first] - 'A']--;
        first++;
      }
      res = max(res, second - first + 1);
      second++;
    }

    return res;
  }
};
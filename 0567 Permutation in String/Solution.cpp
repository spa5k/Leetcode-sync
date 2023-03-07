class Solution
{
public:
  bool checkInclusion(string s1, string s2)
  {
    if (s2.size() < s1.size())
    {
      return false;
    }

    vector<int> hashS1(26, 0), hashS2(26, 0);
    for (int i = 0; i < s1.size(); i++)
    {
      hashS1[s1[i] - 'a'] += 1;
      hashS2[s2[i] - 'a'] += 1;
    }
    if (hashS1 == hashS2)
      return true;
    for (int i = s1.size(); i < s2.size(); i++)
    {
      hashS2[s2[i - s1.size()] - 'a']--;
      hashS2[s2[i] - 'a']++;
      if (hashS1 == hashS2)
        return true;
    }
    return false;
  }
};
class Solution
{
public:
  string greatestLetter(string s)
  {
    vector<int> low(26), upper(26);
    for (auto &i : s)
    {
      int char_valU = i - 'A';
      if (char_valU >= 0 && char_valU < 26)
      {
        upper[char_valU]++;
      }
      else
      {
        low[i - 'a']++;
      }
    }
    for (int i = 25; i >= 0; i--)
    {
      if (low[i] && upper[i])
      {
        string res="";
        res += 'A' + i;
        return res;
      }
    }
    return "";
  }
};
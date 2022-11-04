class Solution
{
public:
  static bool isVowel(char ch)
  {
    return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U';
  };
  string reverseVowels(string s)
  {
    string vowels;
    vowels.reserve(size(s));
    vector<int> idx;
    idx.reserve(size(s));

    for (int i = 0; i < size(s); ++i)
    {
      if (isVowel(s[i]))
      {
        vowels.push_back(s[i]);
        idx.push_back(i);
      }
    }
    reverse(begin(vowels), end(vowels));
    for (int i = 0; i < size(idx); ++i)
      s[idx[i]] = vowels[i];
    return s;
  }
};
class Solution
{
public:
  string removeDuplicates(string input)
  {
    string result;

    for (char c : input)
      if (!result.empty() && result.back() == c)
        result.pop_back();
      else
        result.push_back(c);

    return result;
  }
};
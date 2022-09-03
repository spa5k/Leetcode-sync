class TrieNode
{
public:
  vector<TrieNode *> dict;
  ;
  bool isEnd;

  // Initialize your data structure here.
  TrieNode()
  {
    isEnd = false;
    dict.resize(26, nullptr);
  }
};

class Trie
{
private:
  TrieNode *root;

public:
  Trie()
  {
    root = new TrieNode();
  }

  void insert(string word)
  {
    TrieNode *node = root;
    for (int i = 0; i < word.size(); i++)
    {
      if (node->dict[word[i] - 'a'] == nullptr)
      {
        node->dict[word[i] - 'a'] = new TrieNode();
      }
      node = node->dict[word[i] - 'a'];
    }
    node->isEnd = true;
  }

  bool search(string word)
  {
    TrieNode *node = root;
    for (int i = 0; i < word.size(); i++)
    {
      if (node->dict[word[i] - 'a'] == nullptr)
      {
        return false;
      }
      node = node->dict[word[i] - 'a'];
    }
    return node->isEnd;
  }

  bool startsWith(string prefix)
  {
    TrieNode *node = root;
    for (int i = 0; i < prefix.length(); i++)
    {
      if (node->dict[prefix[i] - 'a'] == nullptr)
        return false;
      node = node->dict[prefix[i] - 'a'];
    }
    return true;
  }
};


/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
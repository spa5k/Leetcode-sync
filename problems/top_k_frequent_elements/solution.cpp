class Solution
{
public:
    vector<int> topKFrequent(vector<int> &nums, int k)
    {
        unordered_map<int, int> map(nums.size());
        for (auto &&i : nums)
        {
            map[i]++;
        }
        vector<int> res;
        priority_queue<pair<int, int>> pq;

        for (auto &&i : map)
        {
            pq.push({i.second, i.first});
            if (pq.size() > (int)map.size() - k)
            {
                res.push_back(pq.top().second);
                pq.pop();
            }
        }
        return res;
    }
};
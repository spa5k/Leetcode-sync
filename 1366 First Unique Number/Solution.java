class FirstUnique {
    Map<Integer, Integer> map;
    Queue<Integer> q;
    
    public FirstUnique(int[] nums) {
        map = new HashMap<>();
        q = new LinkedList<>();
        
        for (int x : nums) {
            map.put(x, map.getOrDefault(x, 0) + 1);
        }
        for (int x : nums) {
            if (map.get(x) == 1) {
                q.offer(x);
            }
        }
    }
    
    public int showFirstUnique() {
        while (!q.isEmpty() && map.get(q.peek()) > 1) {
            q.poll();
        }
        if (q.isEmpty()) {
            return -1;
        } else {
            return q.peek();
        }
    }
    
    public void add(int value) {
        if (!map.containsKey(value)) {
            q.offer(value);
        }
        map.put(value, map.getOrDefault(value, 0) + 1);
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */
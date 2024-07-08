/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res =[]
    const state =[]
    
    function dfs(open, close) {
        if ((open===close) && open ===n) {
            res.push(state.join(""))
            return;
        }
        
        if (open<n) {
            state.push('(')
            dfs(open+1, close)
            state.pop()
        }
        
        if (close<open) {
            state.push(')')
            dfs(open, close+1)
            state.pop()
        }
    }
    
    dfs(0,0);
    return res;
};

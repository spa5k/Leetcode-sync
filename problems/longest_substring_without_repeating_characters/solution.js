/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length, ans = 0;
    let index = new Array(26);
    for(let j=0,i=0;j<n;j++) {
        if(index[s.charAt(j)]){
            i = Math.max(index[s.charAt(j)], i);
        }
        ans = Math.max(ans, j-i+1);
        index[s.charAt(j)] = j+1;
    }
    return ans;
}

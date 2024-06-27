/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ans = {};
    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (let c of str) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        const key = count.toString()

        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(str)
    }

    return Object.values(ans);
};

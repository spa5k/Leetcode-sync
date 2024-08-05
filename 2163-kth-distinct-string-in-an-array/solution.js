/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const map={};
    
    for (let letter of arr) {
        if (map[letter]) {
            map[letter]+=1
        } else {
            map[letter]=1
        }
    }
    
    const res =[];
    const values = Object.entries(map);
    for (let value of values) {
        const letter = value[0];
        const freq = value[1];
        
        if (freq===1) {
            res.push(letter)
        }
    }
    
    return res[k-1] || ""
};

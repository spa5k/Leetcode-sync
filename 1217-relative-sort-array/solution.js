/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const result = new Array();
    const temp = new Set();
    const extra=[];
    for (let i =0; i<arr2.length; i++) {
        const elem = arr2[i];
        
        if (arr1.includes(elem)) {
            for (let num of arr1) {
                if (num===elem) {
                    result.push(num)
                    temp.add(num)
                }
            }
        }
    }
    for (let num of arr1) {
                if (!temp.has(num)) {
                    extra.push(num)
                }
    }
    extra.sort((a,b)=>a-b)
    
    result.push(...extra)
    return result
};

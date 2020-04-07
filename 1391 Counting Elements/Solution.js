/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = arr => {
    let b=0;
    for(i=0;i<arr.length;i++) {
        {arr.includes(arr[i]+1) && b++}
    }
    return b;
};
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
    stones=stones.sort((a,b)=>a-b);
    
    while(stones.length>1) {
        const diff=stones.pop()-stones.pop()
        if(diff > 0) {
            let idx = 0;
            while(diff > stones[idx]) {
                idx++;
            }
            stones.splice(idx, 0, diff);
        }
    }
    
    return stones.length ? stones[0] : 0;
    
};
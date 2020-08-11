/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex=e=>{let n=[];for(let t=0;t<e.length;t++)e[t]>n.length&&(n.push(e[t]),Math.min(...n)<n.length&&n.splice(n.indexOf(Math.min(...n)),1));return n.length};
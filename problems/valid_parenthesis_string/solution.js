/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = s=> {
    let stack = 0;
  let strArray =  s.split("");
  const check1 = strArray.some(val => {
    if (val === ")" && stack === 0) return true;
    stack = val === ")" ? stack - 1 : stack + 1;
  });
  if (check1) return false;
  
  stack = 0;
  const check2 = strArray.reverse().some(val => {
    if (val === "(" && stack === 0) return true;
    stack = val === "(" ? stack - 1 : stack + 1;
  })
  
  return !check2
};
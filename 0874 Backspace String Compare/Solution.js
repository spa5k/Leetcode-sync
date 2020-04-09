/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    const buildString = str => Array.from(str).reduce((acc, cur) => {
        if(cur === '#') {
            return acc.slice(0, acc.length - 1);
        }
        return [...acc, cur];
    }, []).join('');
    return buildString(S) === buildString(T)
};
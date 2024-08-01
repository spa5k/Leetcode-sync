/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
        for (let i = 0; i < details.length; i++) {
            let ageStr = details[i].substring(11, 13);
            let age = parseInt(ageStr, 10);
            if (age > 60) {
                count++;
            }
        }
    return count;
};

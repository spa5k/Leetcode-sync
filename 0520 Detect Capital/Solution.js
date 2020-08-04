/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.toUpperCase() === word || word.toLowerCase() === word)
    return true;
  if (
    word[0].toUpperCase() === word[0] &&
    word.substring(1) === word.substring(1).toLowerCase()
  )
    return true;
  return false;
};
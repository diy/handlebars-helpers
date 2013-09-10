/**
 * Capitalizes a word
 * {{capitalize lowercase.word}}
 *
 * @param {string} word
 */
module.exports = function capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Oceanographer -> 'an'
 * Maker -> 'a'
 * Aquarium -> 'an'
 *
 * @param {string} str
 */
module.exports = function indefiniteArticle (str) {
    if (!str || !str.length) return 'a';
    return (['a','e','i','o','u'].indexOf(str.charAt(0).toLowerCase()) === -1) ? 'a' : 'an';
};

/**
 * Someone -> Someone's
 * Alexis -> Alexis'
 * {{posessive maker.name}}
 *
 @ @param {string} str
 */
module.exports = function possessive (str) {
    return str + (str.charAt(str.length - 1) === 's' ? '\'' : '\'s');
};

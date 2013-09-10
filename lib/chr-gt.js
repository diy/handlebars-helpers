/**
* Conditional for determining if the character length of a string
* is greater than the provided max value.
* {{#chr-gt someString 10}}...{{/chr-gt}}
*
* @param {string} Any string.
* @param {int}    The max number of characters.
*/

module.exports = function chrGt (str, length, options) {
    if (str.length > length) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};

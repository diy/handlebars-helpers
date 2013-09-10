/**
* Conditional for determining if the character length of a string
* is less than the provided min value.
* {{#chr-lt someString 10}}...{{/chr-lt}}
*
* @param {string} Any string.
* @param {int}    The min number of characters.
*/

module.exports = function chrLt (str, length, options) {
    if (str.length < length) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};

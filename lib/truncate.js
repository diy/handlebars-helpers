/**
 * Truncates string to first 10 characters and appends an ellipses.
 * Can override truncate length and appending string.
 *
 * {{truncate someLongString}}
 *
 * @param {string} subject
 * @param {number} truncation amount (how many characters to print)
 * @param {string} string to append (can provide empty string to remove everything)
 */
module.exports = function capitalize (str, length, append) {
    str    = str || '';
    length = length || 10;
    append = typeof append === 'undefined' ? '…' : append;

    if (str.length === length) return str;

    return str.substring(0, length).replace(/\s+$|\.+$/, '') + append;
};

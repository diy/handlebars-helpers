/**
 * Joins an array by a delimiter.
 * {{join array ","}}
 *
 * @param {array} array
 @ @param {string} delimiter
 */
module.exports = function join (array, delimiter) {
    return typeof array.join === 'function' ? array.join((typeof delimiter === 'string') ? delimiter : ',') : '';
};

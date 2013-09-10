/**
 * Pretty prints a number with commas.
 * See: http://stackoverflow.com/a/2901298/147471
 *
 * @param {number} number
 */
module.exports = function number (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

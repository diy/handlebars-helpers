/**
 * Proxy for the native js `encodeURIComponent`.
 *
 * @param {string} str
 */
module.exports = function encodeURIComponentHelper (str) {
    return encodeURIComponent(str);
};

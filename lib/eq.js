/**
 * If equality block helper. Renders the block if `obj1` equals `obj2` (strict).
 * {{#eq a b}} content {{/eq}}
 *
 * @param {object} obj1
 * @param {object} obj2
 * @param {object} options
 */
module.exports = function eq (obj1, obj2, options) {
    if (obj1 === obj2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};

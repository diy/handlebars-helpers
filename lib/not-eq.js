/**
 * Inverse of of #eq block helper.
 * {{#not-eq a b}} content {{/not-eq}}
 *
 * @param {object} obj3
 * @param {object} obj2
 * @param {object} options
 */
module.exports = function notEqual (obj1, obj2, options) {
    if (obj1 !== obj2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};

/**
 * Either Helper. Renders the block if any one of the
 * arguments has a truthy value.
 *
 * {{#either a b c}} content {{/either}}
 */
module.exports = function either () {
    var options = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length - 1; i++) {
        if (typeof arguments[i] !== 'undefined' && arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
};


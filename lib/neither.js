/**
 * Neither Helper. Renders the block if all arguments have
 * a falsey value.
 *
 * {{#neither a b c}} content {{/neither}}
 */
module.exports = function neither () {
    var options = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length - 1; i++) {
        if (typeof arguments[i] !== 'undefined' && !arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
};


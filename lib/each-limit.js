/**
 * Each Helper (w/limit).
 *
 * {{#each-limit items 3}}
 * {{/each-limit}}
 *
 * @param {array} context
 * @param {number} limit
 */
module.exports = function eachLimit (context, limit) {
    var options = arguments[arguments.length - 1];
    var ret = '';

    if (context && context.length > 0) {
        var max = Math.min(context.length, limit);
        for (var i = 0; i < max; i++) {
            ret += options.fn(context[i]);
        }
    } else {
        ret = options.inverse(this);
    }

    return ret;
};

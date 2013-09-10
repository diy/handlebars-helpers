/**
 * Each Helper (in reverse).
 *
 * {{#each-reverse items 3}}
 * {{/each-reverse}}
 *
 * @param {array} context
 */
module.exports = function eachReverse (context) {
    var options = arguments[arguments.length - 1];
    var ret = '';

    if (context && context.length > 0) {
        for (var i = context.length - 1; i >= 0; i--) {
            ret += options.fn(context[i]);
        }
    } else {
        ret = options.inverse(this);
    }

    return ret;
};

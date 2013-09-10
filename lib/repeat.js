/**
 * Repeats a block `n` times.
 * {{#repeat 5}} Hello! {{/repeat}}
 *
 * @param {number} n
 */
module.exports = function repeat (n) {
    var options = arguments[arguments.length - 1], ret = '';
    if (typeof n === 'string') n = parseInt(n, 10);
    for (var i = 0; i < n; i++) {
        ret += options.fn(this);
    }
    return ret;
};

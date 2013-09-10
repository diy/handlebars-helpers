/**
 * If Less-Than Helper. Renders the block none of the first
 * argument is less than the second.
 *
 * {{#if-lt a 5}} content {{/if-lt}}
 */
module.exports = function ifLt (a, b) {
    var options = arguments[arguments.length - 1];
    if (a < b) { return options.fn(this); }
    else { return options.inverse(this); }
};

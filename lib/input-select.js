/**
 * Builds a <select> form control.
 * {{{input-select "month" options "05"}}}
 *
 * @param {string} name    - Input name.
 * @param {array}  options - An array containing all options.
 * @param {string} value   - The selected value.
 */
module.exports = function inputSelect () {
    var name     = arguments[0];
    var options  = arguments[1];
    var value    = arguments.length > 3 ? arguments[2] : null;

    var html = ['<select name="' + name + '">'];
    for (var i = 0; i < options.length; i++) {
        html.push('<option value="' + options[i].value + '"' + (options[i].selected === true || options[i].value === value ? ' selected="selected"' : '') + '>' + options[i].label + '</option>');
    }
    html.push('</select>');
    return html.join('');
};

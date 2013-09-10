/**
 * Object Iteration Helper (w/key extraction).
 *
 * {{#each-key object}}
 * Key: {{this.key}} Value: {{this.value}}
 * {{/each-key}}
 *
 * @param {object} object
 */
module.exports = function eachKey (object) {
    var options = arguments[arguments.length - 1];
    var ret = '';
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ret += options.fn({
                key: key,
                value: object[key]
            });
        }
    }
    return ret;
};

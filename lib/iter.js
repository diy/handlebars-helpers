var _ = require('lodash');

/**
* Adds the current index and next index to iteration scope.
*
* {{#iter items}}
* {{/iter}}
*
* @param {array} context
*/
module.exports = function iter (context, options) {
    var fn = options.fn, inverse = options.inverse;
    var ret = "";
    
    if (context && context.length > 0) {
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + fn(_.extend({}, context[i], { i: i, iPlus1: i + 1 }));
        }
    } else {
        ret = inverse(this);
    }
    return ret;
};

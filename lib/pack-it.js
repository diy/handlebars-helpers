var _ = require('lodash');
var packIt = require('pack-it');

/**
* Iterator that will produce a context w/ the size the content takes up
* in a grid based on the number of items.
*
* {{#pack-it items}}
* {{/pack-it}}
*
* @param {array} context
*/
module.exports = function packItHelper (context, options) {
    var packingStructure = [];

    if (context.length <= 1) {
        return options.fn({ 'content': context[0], 'size': 1 });
    }

    if (context && context.length > 2)
        packingStructure = packIt.getStructure(context, 3, 1);
    else
        packingStructure = [1,1];

    var currRowIndex = 1;
    var packed = _.reduce(context, function (memo, content, i) {
        // First pass of memo is the content object and needs to be run through options.fn
        // i is one ahead at this point so to get the correct packing size we subtract by 1
        memo = typeof memo !== 'string' ? options.fn({ 'content': memo, 'size': packingStructure[i - 1] }) : memo;

        var size = packingStructure[i];
        var cell = Object.create(null);

        cell.content = content;
        cell.size = size;

        if (currRowIndex === 1) {
            cell['position-class'] = 'range-start';
        }

        if (currRowIndex === size) {
            cell['position-class'] = 'range-end';
        }

        if (currRowIndex === size) {
            currRowIndex = 1;
        } else {
            currRowIndex++;
        }

        return memo + options.fn(cell);
    });

    return packed;
};

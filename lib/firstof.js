// Will return the first turthy value.
// Handy for setting default values.
module.exports = function firstof () {
    // Use everything, but the options object
    var valuesLength = arguments.length - 1;

    for (var i = 0; i < valuesLength; i++) {
        var value = arguments[i];
        if (value) return value;
    }

    return '';
};

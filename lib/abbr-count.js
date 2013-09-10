module.exports = function abbrCount (val) {
    var count       = parseInt(val, 10);
    var countString = val + '';
    var symbol      = '';

    if (count >= 1000) {
        symbol = 'k+';
        return countString.substring(0, 1) + symbol;
    }

    return countString;
};

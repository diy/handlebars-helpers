var helpers = [
    'abbr-count',
    'calendar',
    'capitalize',
    'chr-gt',
    'chr-lt',
    'each-key',
    'each-limit',
    'each-reverse',
    'either',
    'encodeURIComponent',
    'eq',
    'firstof',
    'if-gt',
    'if-lt',
    'indefinite-article',
    'input-select',
    'iter',
    'join',
    'neither',
    'not-eq',
    'number',
    'pack-it',
    'paragraphify',
    'possessive',
    'repeat',
    'subtract',
    'title-case',
    'urlify'
];

module.exports = function () {
    return helpers.map(function (helperName) {
        return require('./lib/' + helperName);
    });
};

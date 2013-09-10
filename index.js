var helpers = require('require-all')({
    'dirname': __dirname + '/lib',
    'filter': /(.+)\.js$/
});

module.exports = helpers;

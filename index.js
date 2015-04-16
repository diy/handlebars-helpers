var path = require('path');

var helpers = require('require-all')({
    'dirname': path.join(__dirname, '/lib'),
    'filter': /(.+)\.js$/
});

module.exports = helpers;

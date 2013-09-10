var fs = require('fs');

var helpersPath = './helpers';

fs.readdir(helpersPath, function componentsDir (err, files) {
    files.forEach(function (file) {
        console.log('\'' + file.replace('.js', '') + '\': require(\'./helpers/' + file + '\'),');
    });
});

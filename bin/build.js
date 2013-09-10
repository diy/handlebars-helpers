var fs = require('fs');

var helpersPath = './lib';

fs.readdir(helpersPath, function componentsDir (err, files) {
    files.forEach(function (file) {
        console.log('Handlebars.registerHelper(\'' + file.replace('.js', '') + '\', require(\'./lib/' + file + '\'));');
    });
});

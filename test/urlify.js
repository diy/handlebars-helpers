var test = require('tap').test;

var urlify = require('../lib/urlify');

test('urlify', function (t) {
    t.plan(1);

    t.equals(urlify('Beep Boop'), 'beep-boop', 'urlified');
});

var test = require('tap').test;

var titleCase = require('../lib/title-case');

test('title case', function (t) {
    t.plan(1);

    t.equals(titleCase('beep boop'), 'Beep Boop', 'title case works');
});

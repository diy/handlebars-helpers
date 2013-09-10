var test = require('tap').test;

var capitalize = require('../lib/capitalize');

test('capitalize', function (t) {
    t.plan(2);

    t.equals(capitalize('bleep'), 'Bleep', 'should capitalize');
    t.equals(capitalize('bleep bloop'), 'Bleep bloop', 'should capitalize first word only');
});

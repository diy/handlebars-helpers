var test = require('tap').test;

var join = require('../lib/join');

test('non array', function (t) {
    t.plan(1);

    t.equal(join(false), '', 'should return empty string for non arrays');
});

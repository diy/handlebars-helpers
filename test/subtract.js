var test = require('tap').test;

var subtract = require('../lib/subtract');

test('subtract', function (t) {
    t.plan(1);

    t.equals(subtract(10, 5), 5, 'should be 5');
});

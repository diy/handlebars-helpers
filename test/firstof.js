var test = require('tap').test;

var firstof = require('../lib/firstof');

test('firstof', function (t) {
    t.plan(3);

    t.equals(firstof(null, null, 'test', 'test2'), 'test', 'should return third position "test"');
    t.equals(firstof('test', null, null, 'test2'), 'test', 'should return first position "test"');
    t.equals(firstof(null, null, 'test'), 'test', 'should return last position "test"');
});

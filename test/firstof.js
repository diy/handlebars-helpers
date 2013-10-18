var test = require('tap').test;

var firstof = require('../lib/firstof');

// Stub out the options object passed to all helpers
var stub = {};

test('firstof', function (t) {
    t.plan(3);

    t.equals(firstof(null, null, 'test', 'test2', stub), 'test', 'should return third position "test"');
    t.equals(firstof('test', null, null, 'test2', stub), 'test', 'should return first position "test"');
    t.equals(firstof(null, null, 'test', stub), 'test', 'should return last position "test"');
});

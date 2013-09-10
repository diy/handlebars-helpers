var test = require('tap').test;

var either = require('../lib/either');

test('with a truthy argument', function (t) {
    t.plan(1);

    either(false, true, false, {
        'fn': function trueCallback () {
            t.ok(true, 'truthy callback was called');
        }
    });
});

test('with no truthy arguments', function (t) {
    t.plan(1);
    
    either(false, false, false, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

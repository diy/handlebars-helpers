var test = require('tap').test;

var eq = require('../lib/eq');

test('equal arguments', function (t) {
    t.plan(1);

    eq(true, true, {
        'fn': function trueCallback () {
            t.ok(true, 'truthy callback was called');
        }
    });
});

test('NOT equal arguments', function (t) {
    t.plan(1);
    
    eq(true, false, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

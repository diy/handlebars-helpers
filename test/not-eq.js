var test = require('tap').test;

var notEq = require('../lib/not-eq');

test('not equal arguments', function (t) {
    t.plan(1);

    notEq(true, true, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

test('NOT equal arguments', function (t) {
    t.plan(1);
    
    notEq(true, false, {
        'fn': function trueCallback () {
            t.ok(true, 'truthy callback was called');
        }
    });
});

var test = require('tap').test;

var neither = require('../lib/neither');

test('with a falsey arguments', function (t) {
    t.plan(1);

    neither(true, false, true, {
        'fn': function trueCallback () {
            t.ok(true, 'truthy callback was called');
        }
    });
});

test('with no falsey arguments', function (t) {
    t.plan(1);
    
    neither(true, true, true, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

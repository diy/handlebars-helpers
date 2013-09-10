var test = require('tap').test;

var ifLt = require('../lib/if-lt');

test('obj1 lt obj2', function (t) {
    t.plan(1);

    ifLt(5, 10, {
        'fn': function trueCallback () {
            t.ok(true, 'truthy callback was called');
        }
    });
});

test('obj1 gt obj2', function (t) {
    t.plan(1);
    
    ifLt(10, 5, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

test('obj1 eq obj2', function (t) {
    t.plan(1);
    
    ifLt(5, 5, {
        'inverse': function trueCallback () {
            t.ok(true, 'falsey callback was called');
        }
    });
});

var test = require('tap').test;

var eachLimit = require('../lib/each-limit');

test('each limit', function (t) {
    t.plan(1);

    var callCount = 0;

    var obj = ['bleep', 'bloop'];

    eachLimit(obj, 1, {
        'fn': function eachLimitCallback (scope) {
            if (callCount > 1) {
                t.notOk(true, 'This should have iterated once');
            }

            t.equals(scope, obj[callCount], 'should match first array item');

            callCount++;
        }
    });
});

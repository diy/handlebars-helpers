var test = require('tap').test;

var eachReverse = require('../lib/each-reverse');

test('each limit', function (t) {
    t.plan(2);

    var callCount = 0;

    var obj = ['bleep', 'bloop'];
    var reverse = ['bloop', 'bleep'];

    eachReverse(obj, 1, {
        'fn': function eachReverseCallback (scope) {
            t.equals(scope, reverse[callCount], 'should match reverse array item');

            callCount++;
        }
    });
});

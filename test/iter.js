var test = require('tap').test;

var iter = require('../lib/iter');

test('each iteration adds index to scope', function (t) {
    t.plan(4);

    var callCount = 0;

    var obj = [
        'bleep',
        'bloop'
    ];

    iter(obj, {
        'fn': function eachKeyCallback (scope) {
            t.ok(scope.hasOwnProperty('i'), 'scope has i');
            t.equals(scope.i, callCount, obj[scope.i] + ' correct iteration ' + scope.i);

            if (callCount === 2) return t.end();
            callCount++;
        }
    });
});

test('empty iterator', function (t) {
    t.plan(1);

    iter([], {
        'inverse': function inverseCallback () {
            t.ok(true, 'inverse callback called')
        }
    });
});

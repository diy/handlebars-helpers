var test = require('tap').test;

var eachKey = require('../lib/each-key');

test('each item calls callback with `key` `value` in scope', function (t) {
    t.plan(4);

    var callCount = 0;

    var obj = {
        'bleep': 'bloop',
        'zip': 'zap'
    };

    eachKey(obj, {
        'fn': function eachKeyCallback (scope) {
            t.ok(obj.hasOwnProperty(scope.key), scope.key + ' key exist in original object');
            t.equal(obj[scope.key], scope.value, scope.key + ' value matches original object');

            if (callCount === 2) return t.end();
            callCount++;
        }
    });
});

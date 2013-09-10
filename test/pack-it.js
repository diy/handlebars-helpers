var test = require('tap').test;

var packIt = require('../lib/pack-it');

test('iteration scope', function (t) {
    t.plan(6);

    var callCount = 1; // start at 1 since the first item is skipped in pack-it

    var obj = [
        'bleep',
        'bloop',
        'zip',
        'zap'
    ];

    packIt(obj, {
        'fn': function packItCallback (scope) {
            t.equals(scope.content, obj[callCount],  callCount + ' content is correct');
            t.type(scope.size, 'number', ' size is number');

            if (callCount === 3) return t.end();
            callCount++;
        }
    });
});

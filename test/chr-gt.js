var test = require('tap').test;

var chrGt = require('../lib/chr-gt');

test('character length greater than', function (t) {
    t.plan(1);

    chrGt('beepbooplol', 10, {
        'fn': function gtCallback () {
            t.ok(true, 'character length is greater than 10');
        }
    });
});

test('character length equal', function (t) {
    t.plan(1);

    chrGt('beepbooplol', 11, {
        'inverse': function gtCallback () {
            t.ok(true, 'equal length calls inverse');
        }
    });
});

test('character length less than', function (t) {
    t.plan(1);

    chrGt('beepbooplol', 20, {
        'inverse': function gtCallback () {
            t.ok(true, 'less than length calls inverse');
        }
    });
});

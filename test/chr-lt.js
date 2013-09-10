var test = require('tap').test;

var chrLt = require('../lib/chr-lt');

test('character length less than', function (t) {
    t.plan(1);

    chrLt('beepbooplol', 20, {
        'fn': function gtCallback () {
            t.ok(true, 'character length is less than 20');
        }
    });
});

test('character length equal', function (t) {
    t.plan(1);

    chrLt('beepbooplol', 11, {
        'inverse': function gtCallback () {
            t.ok(true, 'equal length calls inverse');
        }
    });
});

test('character length greater than', function (t) {
    t.plan(1);

    chrLt('beepbooplol', 10, {
        'inverse': function gtCallback () {
            t.ok(true, 'greater length calls inverse');
        }
    });
});

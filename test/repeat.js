var test = require('tap').test;

var repeat = require('../lib/repeat');

test('repeat', function (t) {
    t.plan(1);

    var callCount = 0;

    var subject = 'hey';
    var expected = 'heyheyheyheyheyheyhey';

    var result = repeat(7, {
        'fn': function repeatCallback (scope) {
            callCount++;

            return subject;
        }
    });

    t.equals(expected, result, 'there should be 7 heys');
});

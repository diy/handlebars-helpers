var test = require('tap').test;

var possessive = require('../lib/possessive');

test('possessive', function (t) {
    t.plan(2);

    t.equal(possessive('Beep'), 'Beep\'s', 'beep should add \'s at end');
    t.equal(possessive('Boops'), 'Boops\'', 'boops should add \' before trailing s');
});

var test = require('tap').test;

var truncate = require('../lib/truncate');

var testString = 'This is longer than 10 characters';

test('default', function (t) {
    t.plan(1);

    t.equals(truncate(testString), 'This is lo…', 'should truncate to 10 characters and append hellip');
});

test('provided truncate amount', function (t) {
    t.plan(1);

    t.equals(truncate(testString, 15), 'This is longer…', 'should truncate to 15 characters and append hellip');
});

test('custom append', function (t) {
    t.plan(2);

    t.equals(truncate(testString, 10, ''), 'This is lo', 'should not append anything');
    t.equals(truncate(testString, 10, 'hey'), 'This is lohey', 'should append "hey"');
});

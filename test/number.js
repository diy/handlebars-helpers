var test = require('tap').test;

var number = require('../lib/number');

test('hundreds', function (t) {
    t.plan(1);

    t.equal(number(100), '100', 'should be the same');
});

test('thousands', function (t) {
    t.plan(1);
    
    t.equal(number(1000), '1,000', 'should add a comma at thousands place');
});

test('tens of thousands', function (t) {
    t.plan(1);

    t.equal(number(10000), '10,000', 'should add a comma at ten-thounsands place');
});

test('hudreds of thousands', function (t) {
    t.plan(1);

    t.equal(number(100000), '100,000', 'should add a comma at hundred-thounsands place');
});

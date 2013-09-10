var test = require('tap').test;

var idefiniteArticle = require('../lib/indefinite-article');

test('an', function (t) {
    t.plan(2);

    t.equal(idefiniteArticle('Oceanographer'), 'an', 'should be an');
    t.equal(idefiniteArticle('Aquarium'), 'an', 'should be an');
});

test('a', function (t) {
    t.plan(2);

    t.equal(idefiniteArticle('Maker'), 'a', 'should be a');
    t.equal(idefiniteArticle('Poop'), 'a', 'should be a');
});

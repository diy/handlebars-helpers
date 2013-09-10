var test = require('tap').test;

var paragraphify = require('../lib/paragraphify');

test('paragraphify', function (t) {
    t.plan(1);

    var testStr = 'Line1\n' + 'Line2\n' + 'Line3';
    var expected = '<p>Line1</p><p>Line2\nLine3</p>';
    var result = paragraphify(testStr);

    t.equals(result, expected, 'should create 2 paragraphs');
});

var test = require('tap').test;

var inputSelect = require('../lib/input-select');

test('input select', function (t) {
    t.plan(2);

    var options = [
        {'label': 'Option 1', 'value': 'option-1'},
        {'label': 'Option 2', 'value': 'option-2', 'selected': true}
    ];
    var expected = '<select name="test"><option value="option-1">Option 1</option><option value="option-2" selected="selected">Option 2</option></select>';

    var result = inputSelect('test', options);

    t.equals(expected, result, 'expected output');
    t.ok(result.indexOf('value="option-2" selected="selected"'), 'option 2 should be selected');
});

test('provided selected value', function (t) {
    t.plan(1);

    var options = [
        {'label': 'Option 1', 'value': 'option-1'},
        {'label': 'Option 2', 'value': 'option-2'}
    ];

    var result = inputSelect('test', options, 'option-2');

    t.ok(result.indexOf('value="option-2" selected="selected"'), 'option 2 should be selected');
});

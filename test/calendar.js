var test = require('tap').test;

var calendar = require('../lib/calendar.js');
var date     = '2013-10-09T21:43:33.396Z';

test('calendar', function (t) {
    t.plan(1);

    t.equal(calendar(date), '<span class="moment">Oct 09, 2013</span>', 'should be the correct date');
});
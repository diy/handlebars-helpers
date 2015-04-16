var moment = require('moment');

module.exports = function calendar (timestamp) {
	var time = moment.utc(timestamp);
	return '<span class="moment">' + time.format('MMM DD, YYYY') + '</span>';
};

var BSEAPI = require('./src/bse/index');
var NSEAPI = require('./src/nse/index');

var API = {
	BSE: BSEAPI,
	NSE: NSEAPI
};

module.exports = API;
const fs = require('fs');
const path = require('path');

module.exports = argv => {
	let cmd = argv['_'].shift();
	let loc = require.resolve(path.join(__dirname, 'commands', cmd));
	if (require.cache[loc]) delete require.cache[loc];
	return require(loc);
};

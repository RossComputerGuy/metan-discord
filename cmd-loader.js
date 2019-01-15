const fs = require('fs');
const path = require('path');

module.exports = (client,argv,message) => {
	let cmd = argv['_'].shift();
	if (require.cache[require.resolve(path.join(__dirname,'commands',cmd))]) delete require.cache[require.resolve(path.join(__dirname,'commands',cmd))];
	return require(path.join(__dirname,'commands',cmd));
};

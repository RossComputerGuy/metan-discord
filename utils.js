const fs = require('fs');
const path = require('path');

module.exports = {
	readConfig: () => JSON.parse(fs.readFileSync(path.join(__dirname,'config.json'),'ascii')),
	writeConfig: cfg => fs.writeFileSync(path.join(__dirname,'config.json'),JSON.stringify(cfg))
};

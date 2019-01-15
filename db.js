const {readConfig} = require('./utils');
const mariadb = require('mariadb');

module.exports = mariadb.createPool(readConfig().mariadb);

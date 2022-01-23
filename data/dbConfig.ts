const knex = require('knex');
const environ = require('../environment');

const config = require('../knexfile');

module.exports = knex(config[environ]);

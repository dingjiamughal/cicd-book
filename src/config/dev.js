const config = require('./local');

config.mongodbConf.host = 'dj-mongo';
config.redisConf.host = 'dj-redis';
config.sqlConfig.host = 'dj-mysql';

module.exports = config;

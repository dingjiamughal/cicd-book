const Sequlize = require('sequelize');
const { sqlConfig } = require('../../config/dev');

const { host, port, database, user, password } = sqlConfig;
const conf = { host, port, dialect: 'mysql' };

// 创建连接
const seq = new Sequlize(database, user, password, conf);

module.exports = seq;

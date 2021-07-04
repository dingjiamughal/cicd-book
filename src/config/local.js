/**
 * localhost 本地测试使用
 */

module.exports = {
    sqlConfig: {
        host: 'localhost',
        user: 'root',
        password: 'dingjia3113',
        port: '3306',
        database: 'djtest_mysql'
    },
    mongodbConf: {
        host: 'localhost',
        port: '27017',
        database: 'djtest_mongo'
    },
    redisConf: {
        port: '6379',
        host: '127.0.0.1'
    }
};

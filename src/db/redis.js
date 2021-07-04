const redis = require('redis');
const { redisConf } = require('../config/dev');

// 创建客户端
const { port, host, password } = redisConf;
const opt = {};
if (password) {
    opt.password = password; // prd 环境需要密码
}

const redisClient = redis.createClient(port, host, opt);
redisClient.on('error', err => {
    console.error('redis connect error', err);
});

// 测试 redis 连接
// redisClient.on('connect', () => {
//     console.log('redis connect success');

//     redisClient.set('foo', 'bar', redis.print); // => "Reply: OK"
//     redisClient.get('foo', redis.print); // => "Reply: bar"
//     redisClient.quit();
// });

module.exports = redisClient;

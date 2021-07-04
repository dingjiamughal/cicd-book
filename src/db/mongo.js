const mongoose = require('mongoose');
const { mongodbConf } = require('../config/dev');

const { host, port, database } = mongodbConf;

const url = `mongodb://${host}:${port}`;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// 开始连接（ 使用用户名和密码时，需要 `?authSource=admin` ）
mongoose.connect(`${url}/${database}?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 连接对象
const db = mongoose.connection;

db.on('error', err => {
    console.error('mongoose connect error', err);
});

// db.once('open', () => {
//     // 用以测试数据库连接是否成功
//     console.log('mongoose connect success');
// });

module.exports = mongoose;

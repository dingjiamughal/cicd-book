const router = require('koa-router')();
const sqlConnect = require('../db/sql');
const { ReadmeModel } = require('../models/readme');
const User = require('../models/user');
const { WorkModel } = require('../models/work');

router.get('/api/test', async ctx => {
    const connect = await sqlConnect();

    let isMongoConned = false;
    try {
        await WorkModel.findOne();
        isMongoConned = true;
    } catch (err) {
        isMongoConned = false;
    }

    ctx.body = {
        status: 0,
        content: {
            hello: 'hello-world',
            sql: connect.length > 0,
            mongo: isMongoConned
        }
    };
});

router.get('/api/insert', async ctx => {
    await WorkModel.create({
        title: '你好啊',
        components: { id: 'hape', name: '孙笑川' }
    });

    const data = await WorkModel.find();
    ctx.body = {
        status: 0,
        content: data
    };
});

router.get('/api/dingjiamughal', async ctx => {
    const data = await ReadmeModel.find();
    ctx.body = {
        status: 0,
        content: data
    };
});

console.log();

module.exports = router;

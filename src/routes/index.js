const router = require('koa-router')();
const sqlConnect = require('../db/sql');
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

module.exports = router;

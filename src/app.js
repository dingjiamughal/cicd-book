const helmet = require('koa-helmet');
const bodyparser = require('koa-bodyparser');
const Koa = require('koa');
const http = require('http');

const app = new Koa();

app.use(helmet());

app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
);

// routes
const index = require('./routes');

app.use(index.routes(), index.allowedMethods());

const server = http.createServer(app.callback());

server.listen('3002', () => console.log('server is listen on port 3002'));

module.exports = app;

// const koa = require('koa');
import 'koa';

const app = new koa();

app.use(async ctx => {
    ctx.body = 'hello world';
});

app.listen(3000);
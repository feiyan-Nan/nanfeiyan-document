const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  console.log(ctx.url);
  ctx.body = { name: 'nanfeiyan', age: 23 };
});

app.use(cors());
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

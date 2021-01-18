import Koa from 'koa';
import Router from 'koa-router';
import helmet from 'koa-helmet';
import koaStatic from 'koa-static';
import koaBody from 'koa-body';
import compose from 'koa-compose';
import cors from '@koa/cors';

import path from 'path';

const app = new Koa();
const router = new Router();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../static';
router.get('/', async (ctx) => {
  console.log(ctx.url);
  ctx.body = { path: path.join(__dirname, staticPath), name: 'nanfeiyan' };
});

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(`start: ${start}`);
  await next();
  const end = Date.now();
  console.log(`请求${ctx.url}, 耗时${end - start}ms`);
});

const middleware = compose([
  koaBody(),
  koaStatic(path.join(__dirname, staticPath)),
  cors(),
  helmet(),
]);

app.use(middleware);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

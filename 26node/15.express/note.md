## express 和 koa的对比
- express 采用的是 es3,4 来编写的  koa采用的是es6
- koa中的中间件 内部采用了promise链来实现的， express 采用的是回掉函数来进行编写的
- koa的特点比较小巧 （createContext,compose） express默认设计的就是更方便（内部就内置了大量的中间件，express内置了路由系统，模板引擎，静态服务。。。） express源码稍稍复杂一些
- express 也可以编写我们所谓的中间件 （也有很多第三方的中间件）
- koa （内部对req 和 res进行了封装 ctx.body, ctx.path） express 没有扩展一个上下文对象 （直接在req和res上进行了扩展）
- express 也是一个洋葱模型

> express 还是 koa （希望核心比较小koa） webpack内部有express
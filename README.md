# nanfeiyan-document

### [Vue 文章](./docs/Vue.md)

## Object.freeze

```js
// 这里只是简单的不能修改, 但是不报错,如果希望给出一定的提示(报错)可以使用严格模式`'use strict'`
const HOST = {
  url: "http://www.baidu.com",
  port: 443,
};
Object.freeze(HOST);
HOST.port = 80; // 即使这里做了更改, 他也不会变
console.log(HOST.port); // 443
```

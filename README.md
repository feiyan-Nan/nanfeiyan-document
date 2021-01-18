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

ts的编译方式

- ts-loader 编译的时候可以进行类型检查
- babel-loader @babel/preset-typescript 编译的时候不能进行类型检查

**`which node` 查看node的安装目录，
`which`可以查看可执行程序的安装位置**

```js
// getter和setter方法
const nanfeiyan = {
  info: { name: 'nanfeiyan', desc: 'developer' },
  get name() {
    return this.info.name;
  },
  set name(val) {
    this.info.name = val;
  },
};

console.log(nanfeiyan.name);
nanfeiyan.name = 'xiaopohai';
console.log(nanfeiyan.info);
```

### 函数组合

```js
// 函数组合

const add = (x, y) => x + y;
const square = (x) => x * x;

const fn = (x, y) => square(add(x, y));

console.log(fn(2, 3));

// 上面就算是两次函数调用，我们可以把他合并为一个函数
const compose = (fn1, fn2) => (...args) => fn2(fn1(...args));
console.log(compose(add, square)(1, 2));

// 多个函数组合: 中间件的数量是不固定的，我们可以用数组来模拟
const compose1 = (...[first, ...other]) => (...args) => {
  let ret = first(...args);
  other.forEach((fn) => {
    ret = fn(ret);
  });
  return ret;
};

const fn1 = compose1(add, square, square);
console.log(fn1(1, 2));

```

### 查看http协议

`curl -v http://www.baidu.com`

### 通过telnet连接服务器

`telnet localhost 9000`
`telnet baidu.com 80`

# AST

* Common.js ES6 Module CMD AMD UMD这些代码规范之间的相互转化（UMD是AMD和CMD的统一规范）
* webpack rollup 等打包工具
* TypeScript，JSX等转化为JavaScript




* **JavaScript Parser 把js源码转化为抽象语法树的解析器**
* **浏览器会将js源代码通过解析器转化为抽象语法树， 再进一步转化为字节码或者机器码**




> Babel -- 将jSX ---> 转化为js语法(createElement) ---> reactElement --> ReactDom将reactElement转化为浏览器可识辨的html以及相关的js代码


# webpack
webpack要使用tree-shaking功能必须采用ES6 Module规范（ES6 Module可以静态分析）

*




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

* require.resolve() 查找某个模块的相对路径`require.resolve('jquery')`

什么叫preset(预设)，预设是插件(plugin)的集合

热加载

webpack懒加载就是通过ES7的`import语法`

### tapable

webpack 本质上是一种事件流机制，他的工作流程就是将各个插件串联起来，而实现这一切的核心就是tapable

`webpack`插件`plugin`由一下组成

* 一个JavaScript命名函数
* 在插件函数的prototype上定义一个apply方法
* 指定一个绑定到webpack自身的事件钩子
* 处理webpack内部实例的特定数据
* 功能完成后调用webpack提供的回调
* 插件的放入顺序是没有关系的

### “在浏览器里，从输入 URL 到页面展示，这中间发生了什么？

1. 首先会检查本地缓存是否缓存了该资源，如果有缓存资源，那直接返回资源给浏览器进程
2. 如果缓存中没有，进行DNS解析（先查找本地host，再到网络上的DNS递归的进行查找，直到查找到根DNS服务器）
3.

# React

`ReactDOM.render()`只会更新变化的dom节点，所以说react性能高

`ReactDOM.render()`中每次都会传入一个不可变元素，但是他是怎么实现**局部**更新的

受控组件： 输入框显示的值由state控制





路走的久了，人往往会迷失－－只知道走，却忘了要往哪儿走，为什么要往那走。

大家似乎都在忙，我们可能花一个小时甚至更久和朋友打电话，却很难面对面的聊五分钟。

我们到底在追寻一种什么东西呢？

THML5的新特性：
1. 语义化标签: 让合适的标签做合适的事情  header footer  article aside  nav section（定义文档中的节） time
2. 音视频处理
3. canvas/webGL
4. history Api (单页应用)
5. requestAnimationFrame
6. 地理位置
7. web socket
8. ......





代码的优化空间是很小的，大部分的优化都在网络通讯层优化 强缓存和协商缓存



`requestAnimationFrame`浏览器渲染的下一帧



水平居中方案：
1. position+margin负值，
2. 定位之后上下左右都是0 margin: auto;
3. position + transform: translate


Tomcat本身是用java开发的，所以要想跑java代码，运行了Tomcat，相关的java代码就能运行

JDK里面包含了JVM


路由器里面集成了小型的交换机



人会在一段时间里陷入到自己到怪圈中，走不出来，觉得什么都是自己的问题

25的我已经感受到中年危机了，我总活在未来，不快乐的现在，可是我一个人的时候就是无法不想未来啊

需要得知对方的IP地址

数据包中的数据： 源IP和目标IP， 源MAC地址，目标MAC地址


`ping`对方的时候我们就会用ICMP协议


```docker
docker commit [容器id] [镜像名]

docker exec -it [容器id] bash  进入容器

docker rmi
```


```js
// 判断是不是移动端窗口
const isMobileView = () =>
  window.matchMedia('screen and (max-width: 575px)').matches;

export default isMobileView;
```

指数操作符
```js
console.log(2 ** 10)    //1024
console.log(2 ** 5)   //32
```



可选链操作符`( ?. )`允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。





// 泛型函数
function identity<T>(value: T): T {
return value;
}

identity<string>('2');
identity<number>('2');

function f<T, U>(value: T, message: U): T {
console.log(message);
return value;
}

f<number, string>(1, 'q');

// 泛型接口
interface IndexPageProps<T, S> {
name: T;
age: S;
}

interface Length {
length: number;
}

function f1<T extends Length>(arg: T): T {
console.log(arg.length);
return arg;
}

f1(68);

interface Abort<T = number> {
name: T;
}

const abort: Abort = { name: 2 };
const abort1: Abort<string> = { name: '2' };
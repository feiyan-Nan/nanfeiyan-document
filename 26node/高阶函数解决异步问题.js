/**
 const path = require('path');
 console.log(__filename);
 console.log(path.resolve(__dirname, './index.js'));
 */


// 高阶函数解决异步问题: 主要是利用了回调函数和事件监听机制。

// lodash的after方法可以定义在调用多少次之后, 在执行对应的方法

function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
}

console.log([1, 2, 3].constructor);

let a = 'new String("123")';
console.log(Object.prototype.toString.call(a));
console.log(a.toString());


// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  let cloneTarget =  obj.constructor();
  for (const objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      cloneTarget[objKey] = deepClone(obj[objKey]);
    }
  }
  return cloneTarget;
}

console.log(deepClone({ a: [2,3] }));

// const sym = Symbol(1); // Symbol(1)
// console.log(typeof sym === 'symbol');
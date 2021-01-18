const http = require('http');

const server = http.createServer((req, res) => {
  console.log(getPrototypeChain(res));
  res.setHeader('content-type', 'text/html;charset=utf-8');
  res.end('hello nanfeiyan哈哈');
});

function getPrototypeChain(obj) {
  var protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  protoChain.push(null);
  return protoChain;
}
let a = Promise.reject('123');
console.log('a', getPrototypeChain(a));
// console.log(Object.getPrototypeOf([]) === []);

/**
 笔记
 response原型继承于Stream
 Object.getPrototypeOf() 返回实例的原型
 */

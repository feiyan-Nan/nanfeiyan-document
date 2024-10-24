const EventEmitter = require('events');
// class MyEmitter extends EventEmitter{};

function MyEmitter() {

}

Object.setPrototypeOf(MyEmitter.prototype, EventEmitter.prototype);

// 只要继承EventEmitter, 就具有了发布订阅的能力

const myEmitter = new MyEmitter();
myEmitter.on('event', function(data) {
  console.log(data.num);  // 1
  // data.num++;
});
myEmitter.on('event', (data) => {
  console.log(data.num); // 2
});

myEmitter.on('newListener', function(data) {
  console.log(data);  // 1
  // data.num++;
});

myEmitter.emit('event', {
  num: 1
});

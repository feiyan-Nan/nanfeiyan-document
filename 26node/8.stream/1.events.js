const EventEmitter = require("events"); //事件触发器 on emit off once

function Girl() {}
// 如何继承类的原型方法 extends

// class Girl extends EventEmitter{} ;// 会继承实例属性，也会继承原型属性

Object.setPrototypeOf(Girl.prototype, EventEmitter.prototype);

const girl = new Girl();

const sleep = function (type) {
  console.log("睡觉", type);
};
const drink = function (type) {
  console.log("喝", type);
};

let wating = false;
girl.on("newListener", function (type) {
  //  每次绑定事件的时候 就会执行此方法
  // newListener的回调的调用时机，实在绑定之前触发的
  girl.emit(type);
  // process.nextTick(() => {});
  /*
  if (!wating) {
    process.nextTick(() => {
      girl.emit(type);
      wating = false;
    });
    wating = true;
  }*/
});

girl.once("失恋", sleep); // on('wrapper')
girl.once("失恋", drink); // 将事件绑定好 {'失恋':[sleep,drink]} 订阅， vue中事件绑定 @xxx  -> {xxx:[]}
// girl.emit("失恋", "女生"); // 如果是once的话，会在emit之后将自己删除
// girl.emit("失恋", "女生");
// girl.emit("失恋", "女生");

// mitt pub / sub
// on订阅 emit发布 off关闭事件 once绑定一次
// 如何监听用户绑定了哪些事件

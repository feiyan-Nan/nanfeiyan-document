function EventEmitter() {
  this._events = {}; // 实例属性
}

EventEmitter.prototype.on = function (event, listener) {
  if (!this._events) {
    this._events = {}; // 如果当前实例不具备_events 属性，则添加一个
  }
  let listeners = this._events[event] || [];
  if (event !== "newListener") {
    this.emit("newListener", event);
  }
  listeners.push(listener); // 在将回调放到队列之前，需要先执行newLister
  this._events[event] = listeners;
};
EventEmitter.prototype.emit = function (event, ...args) {
  if (!this._events) {
    this._events = {}; // 如果当前实例不具备_events 属性，则添加一个
  }
  let listeners = this._events[event];
  listeners &&
    listeners.forEach((listener) => {
      listener(...args);
    });
};
EventEmitter.prototype.off = function (event, listener) {
  if (!this._events) {
    this._events = {}; // 如果当前实例不具备_events 属性，则添加一个
  }
  let listeners = this._events[event];
  // 我们在删除的时候用的是listener，但是内部绑定的是wrapper
  this._events[event] = listeners.filter((l) => {
    // 前面满足还要看后面
    return l != listener && listener.l !== l;
  });
};
EventEmitter.prototype.once = function (event, listener) {
  const wrapper = (...args) => {
    listener(...args); // 触发原有的函数
    this.off(event, wrapper); // 函数执行后再移除掉自己
  }; // 函数的切片

  listener.l = wrapper; // 自定义属性

  this.on(event, wrapper); // 先绑定一个内置函数
};

module.exports = EventEmitter;

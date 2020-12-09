const EventEmitter = (function () {
  let eventsList = {};
  let on = function (name, fn) {
    if (!eventsList[name]) {
      eventsList[name] = [];
    }
    eventsList[name].push(fn);
  };
  let emit = function (name, ...args) {
    let fns = eventsList[name];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, args);
    }
  };
  return {
    $on: on,
    $emit: emit,
  };
})();

EventEmitter.$on('click', function (name) {
  console.log(name, 5555);
});
EventEmitter.$on('click', function (name) {
  console.log(name, 66666);
});
EventEmitter.$emit('click', 'nanfeiyan');

class EventEmtter {
  constructor() {
    this.eventsList = {};
  }
  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error('哥 你错了 请传一个函数');
    }
    if (!this.eventsList[type]) {
      this.eventsList[type] = [];
    }
    this.eventsList[type].push(handler);
  }
  emit(type, params) {
    if (this.eventsList[type]) {
      this.eventsList[type].forEach((handler) => {
        handler(params);
      });
    }
  }
  off(type, handler) {
    if (this.eventsList[type]) {
      this.eventsList[type].splice(this.eventsList[type].indexOf(handler), 1);
    }
  }
}

let event = new EventEmtter();

let a = (function (frequency = 5) {
  if (frequency > 0) {
    try {
      // const func = () => console.log('执行测试');
      // const func = () => {
      //   throw new Error('出错');
      // };
      throw new Error('出错');
      return func;
    } catch (e) {
      console.log(e);
      frequency--;
    }
  }
})(5);
a();

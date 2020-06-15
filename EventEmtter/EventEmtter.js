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




const eventEmitter = (function () {
  let eventList = {}
  let on = function (name, fn) {
    if(!eventList[name]) {
      eventList[name] = []
    }
    eventList[name].push(fn)
  }
  let emit = function (name, ...args) {
    let fns = eventList[name]
    if(!fns || fns.length === 0) {
      return false
    }

    for(let i = 0; i< fns; i++) {
      fns[i].apply(this, args)
    }
  }
  return{
    $on: on,
    $emit: emit
  }
})()
eventEmitter.$on()

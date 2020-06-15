// 单例模式第一种
function Human() {
  this.instance = null;
}

Human.getInstance = function () {
  if (!this.instance) {
    this.instance = new Human();
  }
  return this.instance;
};

let a = Human.getInstance();
let b = Human.getInstance();
console.log(a === b);

class Index {
  static instance = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Index();
    }
    return this.instance;
  }
  eat() {
    console.log('吃饭');
  }
}

console.log(Index.getInstance() === Index.getInstance()); // true



function single() {

}

single.getInstance = (function () {
  var instance = null
  return function () {
    if(!instance) {
      instance = single()
    }
    return instance
  }
})()

console.log(single.getInstance() === single.getInstance());


// 登录框, 购物车




var instance = null

class Storage {
  static getInstance () {
    if(!instance) {
      instance = new Storage()
    }
    return instance
  }
  setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
  getItem = (key, value) => localStorage.getItem(key)
}



















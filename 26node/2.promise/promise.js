const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

// 为了所有人promise 可以互相调用，所以所有的promise都要遵循这个规则
function resolvePromise(promise2, x, resolve, reject) {
  // 这个方法处理的会严谨一些，保证所有人的promise 都可以互相调用

  // If promise and x refer to the same object, reject promise with a TypeError as the reason.
  // 如果x 和 promise2 引用的是同一个对象，那么promise2 要等待x执行完毕
  // x是一个promise，而且永远不会成功和失败，那么就会在这里等待
  if (x === promise2)
    return reject(new TypeError("Chaining cycle detected for promise"));

  // 我如何知道x是不是promise
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // 有可能是promise
    // Let then be x.then
    let called = false;
    try {
      let then = x.then; // then方法可能是通过defineProperty来进行定义的
      if (typeof then === "function") {
        // 是promise  {then:function(){}}
        then.call(
          x,
          (y) => {
            // x.then
            // 为了防止promise解析后的结果依旧是promise，所以需要递归解析
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        // 就是一个对象或者函数  {a:1}  function(){}
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x); // 普通值 直接将结果传递到下面就可以了
  }
}
class Promise {
  constructor(executor) {
    this.status = PENDING; // 默认是等待态
    this.value = undefined; /// 成功的原因
    this.reason = undefined; // 失败的原因

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    // promise调用then的时候 可能状态依旧是pending，那么我们需要将回调先存放起来
    // 等待过一会调用resolve时触发 onResolvedCallbacks 执行
    // 等待调用 reject时触发onRejectedCallbacks 执行

    const resolve = (value) => {
      //只有状态是pending的时候 才可以修改状态 和 改变成功和失败的原因

      if (value instanceof Promise) {
        // 递归解析的流程
        return value.then(resolve, reject);
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 成功调用成功的回调
        this.onResolvedCallbacks.forEach((cb) => cb());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 失败调用成功的回调
        this.onRejectedCallbacks.forEach((cb) => cb());
      }
    };
    //  调用executor 会自动传入 resolve 和 reject
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  catch(errCallback) {
    return this.then(null, errCallback);
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };
    let promise2 = new Promise((resolve, reject) => {
      // 调用then的时候 已经确定了是成功还是失败了
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);

            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return promise2;
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all = function (values) {
    // promise 以第一个结果为准，其它的逻辑还是走，只是不采纳了
    return new Promise((resolve, reject) => {
      // 并发是循环  串行递归
      let arr = [];
      let times = 0;
      function processData(index, data) {
        arr[index] = data; // arr[2] = 1;
        if (++times === values.length) {
          resolve(arr);
        }
      }

      for (let i = 0; i < values.length; i++) {
        let cur = values[i];
        Promise.resolve(cur).then((data) => {
          processData(i, data);
        }, reject);
      }
    });
  };

  static race = function (values) {
    // promise 以第一个结果为准，其它的逻辑还是走，只是不采纳了
    return new Promise((resolve, reject) => {
      // 并发是循环  串行递归
      for (let i = 0; i < values.length; i++) {
        Promise.resolve(values[i]).then(resolve, reject);
      }
    });
  };
}

module.exports = Promise;

// promises-aplus-tests -g
// promises-aplus-tests 文件明
Promise.deferred = function () {
  // deferred  all race catch ...
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

// 模块化规范 ， commonjs规范

// promises-aplus-test

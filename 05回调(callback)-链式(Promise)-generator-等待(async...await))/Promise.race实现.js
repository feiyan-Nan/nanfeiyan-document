
Promise.race1 = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      Promise.resolve(p).then(resolve, reject).catch(reject);
    });
  })
};

Promise.race1([new Promise((resolve, reject) => {
  setTimeout(reject,2000, '哈哈哈哈')
}), 2]).then(res => console.log(res)).catch(err => console.log(err))



// 封装一个超时的逻辑
function wrap(userPromise) {
  let abort;
  let innerPromise = new Promise((resolve, reject) => {
    abort = reject;
  });
  let racePromise = Promise.race([innerPromise, userPromise]);
  racePromise.abort = abort;
  return racePromise
}

let p = wrap(new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, '用户数据')
}));

setTimeout(() => {
  p.abort('超时了')
}, 1000);

p.then(res => console.log(res)).catch(err => console.log(err))

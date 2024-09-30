
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
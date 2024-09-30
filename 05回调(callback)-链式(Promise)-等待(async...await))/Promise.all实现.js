
Promise.all1 = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let time = 0
    function func(value, i) {
      result[i] = value;
      if (++time === promises.length) resolve(result);
    }
    promises.forEach((p, i) => {
      try {
        Promise.resolve(p).then(value => func(value, i), reject).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  })
};

Promise.allSettled([new Promise((resolve, reject) => {
  setTimeout(reject,2000, '哈哈哈哈')
}), 2]).then(res => console.log(res)).catch(err => console.log(err))
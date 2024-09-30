// let arr = [1,2,3,[4,[5,6,[7]]]]
//
//
// function flat(arr) {
//   while (arr.some(Array.isArray)) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
//
// console.log(flat(arr));


// const fs = require('fs/promises');
// const path = require('path');
// fs.readFile(path.resolve(__dirname, './mian.html'), 'utf8')
//   .then(data => {
//     // return fs.readFile(path.resolve(__dirname, './mian.html'), 'utf8');
//     throw new Error('error');
//   }, err => console.log(err))
//   .then(null, err => console.log(err,11)).catch(err => console.log(err,22));


// Promise.reject('eee').then().then(null, err => console.log(err, 33));

// console.log(process.argv);
//
// const playerAction = process.argv[process.argv.length - 1];
// console.log(playerAction);

Promise.all([1]).then(values => console.log(values));


Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let time = 0
    function func(value, i) {
      result[i] = value;
      if (++time === promises.length) resolve(result);
    }
    promises.forEach((p, i) => {
      try {
         p.then(value => func(value, i));
      } catch (e) {
        reject(e);
      }
    });
  })
};

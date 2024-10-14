// m.js
// module.exports = {
//   foo: 123
// }


// a.js
console.log(module.exports === exports); // true
console.log(module.exports === this , exports === this); // true true



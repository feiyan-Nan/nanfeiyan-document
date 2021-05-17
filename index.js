#!/usr/bin/env node

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

// console.log(process.argv);
//
// const playerAction = process.argv[process.argv.length - 1];
// console.log(playerAction);

// const bufferstr = new Buffer('nanfeiyan').toString('base64');
// console.log(bufferstr);
// console.log(new Buffer(bufferstr, 'base64').toString());
// console.log(process.versions.node);


Promise.resolve('nanfeiyan').then((res) => {
  console.log(1)
  return new Promise(() => {});
}).then(res => console.log(res)).catch(err => console.log(err));
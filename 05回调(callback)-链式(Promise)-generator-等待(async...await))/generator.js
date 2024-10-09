// let likeArray = { 0: 'zero', 1: 'one', length: 2, [Symbol.iterator]: Array.prototype[Symbol.iterator] };
//
// const arr = Array.from(likeArray);
// console.log(arr);
//
// let obj = {
//   get [Symbol.toStringTag]() {
//     return 'MyObject';
//   }
// };
//
// console.log(Object.prototype.toString.call(obj));



function* generator() {
  const r1 = yield Promise.resolve('hello');
  console.log(r1, '33');
  const r2 = yield Promise.resolve('world');
  console.log(r2, '555');
}

const iterator = generator()
console.log(generator);
console.log(iterator.next());
console.log(iterator.next('8888'));
console.log(iterator.next('444'));


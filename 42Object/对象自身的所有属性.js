const obj = { a: 1, b: 2, [Symbol('AA')]: 3 };
obj.__proto__ = { c: 4 };
// console.log(Object.getOwnPropertyNames(obj));
//
// console.log(Object.getOwnPropertySymbols(obj));


Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(key => {
  console.log(key, obj[key]);
});

// 不兼容IE. 也没有polyfill
Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key]);
});


for (let key in obj) {
  console.log(key, obj[key]);
}

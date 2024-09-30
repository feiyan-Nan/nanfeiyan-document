const fs = require('fs/promises');

fs.readFile('ce.ts', 'utf-8').then(res => {
  console.log(res);
});



// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   eat () {
//     console.log(this.name + ' eat');
//   }
// }
//
// const lisi = new Person(
//   'lisi',
//   23
// )
// console.log(lisi.eat());
//
//
// console.log(Reflect.ownKeys(lisi));


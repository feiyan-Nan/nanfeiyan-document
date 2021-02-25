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

console.log(process.argv);

const playerAction = process.argv[process.argv.length - 1];
console.log(playerAction);

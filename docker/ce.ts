// var Jungle = (n1: number, n2: number): number => {
//   return n1 * n2;
// };
// console.log(Jungle(12, 2);


interface JungleProps {
  (n1: number, n2: number): number

  aa: string
}

// 函数的本质是一个对象类型，所以你要用一个接口去定义一个对象，描述他的属性

const Jungle: JungleProps = (n1, n2) => {
  return n1 * n2;
};
Jungle.aa = 'dd';

console.log(Jungle(12, 2);
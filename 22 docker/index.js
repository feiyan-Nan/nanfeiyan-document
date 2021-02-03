var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
function getProperty(obj, key) {
    return obj[key];
}
var tsInfo = {
    name: 'Typescript',
    supersetOf: 'Javascript',
    difficulty: Difficulty.Intermediate
};
var difficulty = getProperty(tsInfo, 'difficulty');
console.log(difficulty);
var x;
init();
console.log(2 * x);
function init() {
    x = 10;
}
/*
  联合类型  ｜    type Message = string | string[];
  类型别名： type   type Message = string | string[];
  交叉类型： &  type PartialPointX = { x: number; };  type Point = PartialPointX & { y: number; };
  索引签名   [key: string]: any
  keyof  得到一个联合类型
  in   in可以遍历一个联合类型

 */

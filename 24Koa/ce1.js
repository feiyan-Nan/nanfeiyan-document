// 函数组合

const add = (x, y) => x + y;
const square = (x) => x * x;

const fn = (x, y) => square(add(x, y));

console.log(fn(2, 3));

// 上面就算是两次函数调用，我们可以把他合并为一个函数
const compose = (fn1, fn2) => (...args) => fn2(fn1(...args));
console.log(compose(add, square)(1, 2));

// 多个函数组合: 中间件的数量是不固定的，我们可以用数组来模拟
const compose1 = (...[first, ...other]) => (...args) => {
  let ret = first(...args);
  other.forEach((fn) => {
    ret = fn(ret);
  });
  return ret;
};

const fn1 = compose1(add, square, square);
console.log(fn1(1, 2));

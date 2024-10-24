"use strict";

// function* foo(x) {
//     let a = yield x + 1;
//     console.log(a)
//     let b = yield x + 2;
//     console.log(b)
// }
function _regeneratorRuntime(){
    function wrap(iteratorFn){
        // 基本稍后执行 所需要的信息
        const _context = {
            next:0, // 上下文信息
            done:false,
            stop(){
                _context.done = true;
            },
            sent:null
        }
        // wrap 函数执行后返回的是一个迭代器
        return { // it
            next(v){ // 每次调用next的时候 会给上一次的yield返回值赋值
                _context.sent = v;
                let value = iteratorFn(_context);
                return {value,done:_context.done}
            }
        }
    }
    return {
        wrap
    }
}
function foo(x) {
  var a, b;
  return _regeneratorRuntime().wrap(function foo$(_context) {
   // while (1) { // 表示一个状态机  状态的扭转， 表示这个逻辑会走多次 (根据状态执行对应的流程)
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return x + 1;

        case 2:
          a = _context.sent;
          console.log(a);
          _context.next = 6;
          return x + 2;

        case 6:
          b = _context.sent;
          console.log(b);
        case 8:
        case "end":
          return _context.stop();
      }
    //}
  });
}
let it = foo(1);
console.log(it.next())
console.log(it.next('ok'))
console.log(it.next('ok ~!'))


// wrap 会使用通过babel编译后的结果 （将generator函数转化成swtich  & case的方式 ，将一个函数进行了拆分，拆分成多个部分，根据_context.next）
// 来决定执行某一部分
// wrap函数返回的是一个迭代器 ， 我们需要调用迭代器的next方法， 调用next的时候会将传入的值保存在_sent上
// 之后调用wrap传入的函数，将sent值取出来作为上次yield的返回值
// 最终执行完毕后done变为true
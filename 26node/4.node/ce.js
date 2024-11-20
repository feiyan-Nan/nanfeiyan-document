const vm = require('vm');
let abc = 100;
const fn = vm.runInThisContext('console.log(abc)')
const fn1 = vm.compileFunction('console.log(abc)', [
  'abc'
])
fn1('22')


// fn()


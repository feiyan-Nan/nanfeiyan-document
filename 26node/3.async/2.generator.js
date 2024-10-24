/*
function* fn() {
    try{
        let r1 = yield 'hello'
        console.log(r1);
        let r2 = yield 'world'
        console.log(r2)
    }catch(e){
        console.log(e,'-----')
    }
}
let iterator =  fn();
console.log(iterator.next()); // 碰到yield的就停止了，此时yiled的结果会作为value值，done:false


// 当调用next方法的时候 可以给上一次yield的赋值
console.log(iterator.next('xyz')); // value:world done:false
console.log(iterator.next('abc')); 


// geneactor + promise 来使用 .then.then.then

*/
const fs = require("fs/promises");
const path = require('path')
function* readFile() {
  let data1 = yield fs.readFile(path.resolve(__dirname,"a.txt"), "utf8");
  let data2 = yield fs.readFile(path.resolve(__dirname,data1), "utf8");
  return data2; // 30
}
/*
let it = readFile();
let {value,done} = it.next();
value.then(data1=>{
    let {value,done} = it.next(data1)
    value.then(data2=>{
        let {value,done} = it.next(data2);
        console.log(value)
    })
})
*/
// 递归的写法
function co(it){
    return new Promise((resolve,reject)=>{
        function step(data){
            let {value,done} = it.next(data);
            if(!done){
                Promise.resolve(value).then(data=>{ // 第一步完成
                    step(data); // 下一步
                }).catch(e=>{
                    reject(e);
                })
            }else{
                resolve(value)
            }
        }
        step();
    })
}

co(readFile()).then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
})
const buf = Buffer.from('张三');
const buf1 = Buffer.from('李四');
const buf2 = Buffer.concat([buf, buf1]);
console.log(buf);
console.log(buf1);
console.log(buf2.toString());


console.log(Buffer.isBuffer(buf));
// node中为了支持二进制数据 Buffer 缓存区  内存 （可以和字符串进行相互的转换）。 文件的读写 读取的内容也都是buffer类型

// buffer在node中的展现形式是  16进制 （2进制  8进制 10进制  16进制） 编码的问题
// 中文的编码 ascii -> gb2312 -> gbk(2个字节组成一个汉字) -> unicode -> utf8 (3个字节串组成一个汉字)  默认都是utf8格式

// 1个字节 由8个bit组成 （11111111）2进制  -》 16进制

// 如何将任意进制转化成10进制   (当前位的值)* （几进制）^（当前位的值 -1）
// 00000001  -> 1  =>  2^0
// 00000011  -> 2 + 1 -> 1*2^1 + 1*2^0
// 00000111  -> 2 + 1 -> 2^2 + 2^1 + 2^0

let sum = 0;
for (let i = 0; i < 8; i++) {
  sum += 1 * 2 ** i;
}
console.log(sum); // 8个1最大是255   255  -> 16进制 ff 不停地对当前值取余 （最终到倒着念就是最终的结果）

// 1) 让任意进制可以转换成10进制 （ob2  0o8 0x16）

// 0o666 ->  6 * 8^2 + 6*8^1 + 6*8  => 438

// 2) 让十进制转换成任意进制
// 100 -> 2进制
console.log(0b1100100); // &  |

console.log(parseInt("11111111", 2)); // 将任意进制转换成10进制

console.log((0x16).toString(16)); // 将任意进制转换成任意进制

// 为什么node中buffer用的是16进制 不是2进制呢？为了短

// 小数的进制转化
//0.1 + 0.2 != 0.3 (计算机存储的时候 需要将内容转换成2进制 )  小数转换成2进制怎么转 *2 取整法
// 运算采用的是近似值的运算 得出来的结果就比0.3大了。 如何解决
// 0.1 * 2= 0.2   0
// 0.2 *2 = 0.4   0
// 0.4 * 2 = 0.8  0
// 0.8 * 2 = 1.6  1
// 0.6 * 2 = 1.2  1
// 0.2 *2 = 0.4   0
// 0.4 * 2 = 0.8  0
// 0.8 * 2 = 1.6  1
// 0.6 * 2 = 1.2  1

// base32 如何设计  （编码）
// base64 典型的进制转化 （中文） base64缺陷是什么？ 是任意的图片都能转换成base64么？ 小图片

const buffer = Buffer.from("珠峰");

console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));

// 00111001  00111000 00111110 00100000  二进制的编码  每一个字节最大是255

// 3*8 => 4 * 6

console.log(parseInt("00111001", 2));

console.log(parseInt("00111000", 2));

console.log(parseInt("00111110", 2));

console.log(parseInt("00100000", 2));

// 57 -> 56 -> 62 -> 32

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 已知的编码表
str += str.toLocaleLowerCase();
str += "0123456789";
str += "+/";

console.log(str[57] + str[56] + str[62] + str[32]); // 54+g

// base64 缺点就是会比之前的内容 大1/3, 可以替换链接（最终转化的字符串）加载快

// 编码---------

// buffer // urlloader webpack 基于node转换成base64 可以直接采用此方法

// vscode 默认不支持node的ts提示  npm install @types/node

// 我们的最小单位在开发中不是bit位 是字节

console.log(Buffer.from("珠").toString("base64"));

// buffer代表的是内存 内存大小是不可变的  js 是弱类型  （其它语言声明数据大小的时候 默认都是先约定好，不够了在扩容）

let buf1 = Buffer.from("a"); // 根据字符串来声明buffer，固定大小
let buf2 = Buffer.from(["1", "2", "abc"]); // 这种方式一般不采用, 不会这么用
let buf3 = Buffer.alloc(10);
console.log(buf1, buf2, buf3);

// 字符采用的是ascii码 1个字符是一个1字节 汉字采用的是utf8(编码的转化规则) 一个汉字是三个字节

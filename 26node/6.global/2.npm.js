
// 文件模块
// 模块加载的 顺序 1） 加载相对的路径会根据文件名匹配后缀 + .js + .json
//               2) 文件名和文件夹同名了
const path = require('path')

const file = require('./file'); 
// 在高版本中会优先查找 文件，在查找文件夹
// 在高版本中会先查找package.json对应的main’字段， 没有会查找文件夹中的index.js
// 通过相对路径、绝对路径来引用的情况 


// 内置模块 优先查找 


// 第三方模块 （需要安装）
console.log(module.paths);


'/Users/jw/Desktop/jiagouke07-3-node/6.global/node_modules',
'/Users/jw/Desktop/jiagouke07-3-node/node_modules',
'/Users/jw/Desktop/node_modules',
'/Users/jw/node_modules',
'/Users/node_modules',
'/node_modules'

const jquery = require('jquery'); // 找到同名的文件夹 按照会先查找package.json对应的main’字段， 没有会查找文件夹中的index.js
// 如果找到根目录下 依然找不到则就真的没有这个模块 （报错）


// 第三方模块的安装 
    // 全局模块 全局安装的模块 只能在命令行中使用  npm install nrm -g  只能在全局下用。 我们也可以将全局模块安装到项目中
        // webpack babel (为了保证所有人的版本一致)  默认安装的时候会生成一个 package-lock.json 文件用来存储版本信息，保证每次安装的版本都一致
        // lock 文件可以锁定npm install的时候 安装的是当前锁定的版本 

        // npm中版本号分为三部分 major|minor|patch (semver)  vue2.7.5
        //  ^2 锁定大版本，只要是2就可以，不能比当前的低
        //  ~0.2.0 限制的是第二位 保证版本 0.2 +   >= <=



    // 项目模块 在项目中使用到了 
        // 一种是将这个模块在代码里用了 require('mime')
        // 还有一种行为就是将此模块 全局模块用在项目中   --save-dev -D(只在开发的时候使用)
        // 安装的全局包 都放在node_modules 下并且会产生一个.bin目录

        // 想运行项目下的.bin 中的命令  npx 命令的名字  npm run 的方式运行命令 （会在运行前将 .bin 目录放到我们的环境变量中）


    // 全局模块安装到项目下 也可以像项目依赖来使用  写一个全局包( 1) 在package 中添加 bin  2）#! /usr/bin/env node)

    const mime = require('mime')
    console.log(mime)


    // events buffer fs....


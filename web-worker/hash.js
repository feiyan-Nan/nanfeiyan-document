// hash.js
self.importScripts("https://unpkg.com/spark-md5@3.0.1/spark-md5.min.js");

// 生成文件 md5
self.onmessage = async e => {
  const file = e.data
  const md5 = await createFileMd5(file)
  self.postMessage(md5);
  self.close()
};

function createFileMd5(file) {
  return new Promise((resolve, reject) => {
    // 创建FileReader实例
    const fileReader = new FileReader();
    // 开始读文件
    fileReader.readAsBinaryString(file);
    // 文件读完之后，触发load事件
    fileReader.onload = (e) => {
      // e.target就是fileReader实例，这里用this也是指fileReader实例
      console.log(e.target);
      // result是fileReader读到的部分
      const result = e.target.result;
      // 如果读到的长度和文件长度一致，则读取成功
      const isSuccess = file.size === result.length;
      // 读取成功，则生成MD5，扔出去。失败就报错
      isSuccess
        ? resolve(self.SparkMD5.hashBinary(result))
        : reject(new Error("读取出错了"));
    };
    //   读取过程中出错也直接报错
    fileReader.onerror = () => reject(new Error("读取出错了"));
  });
}


const net = require("net"); // net 就是tcp模块
const socket = new net.Socket(); // 套接字  双工流
// 连接8080端口
socket.connect(8080, "localhost");
// 连接成功后给服务端发送消息
socket.on("connect", function (data) {
  //   socket.write("hello"); // 浏览器和客户端说 hello
  socket.end();
});
socket.on("data", function (data) {
  // 监听服务端的消息
  console.log(data.toString());
});
socket.on("error", function (error) {
  console.log(error);
});

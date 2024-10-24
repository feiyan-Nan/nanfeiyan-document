// websocket 传输层还是应用层  "应用层" 可以实现双向通信   长连接  没有跨域问题
// 聊天室


// h5提供的 

const Server = require('ws').Server;

const server = new Server({ port: 30000 });

server.on('connection', function (socket) {
    console.log('链接成功');
    socket.on('message', function (message) {
        console.log('客户端发来消息', message);
        socket.send('服务端说' + message);
    })
})




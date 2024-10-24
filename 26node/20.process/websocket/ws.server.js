const net = require('net');
const crypto = require('crypto');
const code = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
// websocket 底层就是基于tcp  在自己实现了一个ws包
net.createServer(function (socket) {
    socket.setKeepAlive(true); // 要保持长连接
    socket.once('data', function (data) {
        data = data.toString();
        if (data.includes('Upgrade: websocket')) {
            // 这里要升级websocket协议
            let rows = data.split('\r\n');
            let headers = rows.slice(1, -2).reduce((memo, row) => {
                let [key, value] = row.split(': ');
                memo[key] = value;
                return memo
            }, {});
            let wskey = headers['Sec-WebSocket-Key'];
            let accpetKey = crypto.createHash('sha1').update(wskey + code).digest('base64');
            let response = [
                'HTTP1.1 101 Switching Protocols',
                'Upgrade: websocket',
                `Sec-WebSocket-Accept: ${accpetKey}`,
                'Connection: Upgrade', // 升级成功
                '\r\n'
            ].join('\r\n')
            socket.write(response); // 表示协议切换就成功了
        }
        // websocket 通信的时候  会传入对应的格式
        socket.on('data', function (buffers) {
            // 获取报文中的第一个字节
            // 用 我们&运算 按位与  都是1 才是1
            let fin = buffers[0] & 0b10000000 === 0b10000000; // fin 就是1 结束了 发的数据很小
            //                              0001
            let opcode = buffers[0] & 0b00001111; // 可以取出来后四位 说明是文本

            let len = buffers[1] & 0b01111111; // 数据的长度

            let mask = buffers.slice(2, 6); // 获得4个字节的掩码内容

            // 掩码了 需要反掩码回去

            let payload = buffers.slice(6);

            payload.forEach((item, i) => {
                payload[i] ^= mask[i % 4] // 用掩码做异或操作
            })

            // 服务端返回数据  (fin  opcode)  payloadlen  1个字节  内容

            const buffer = Buffer.alloc(payload.length + 2)

            // 服务端返回客户端的数据 
            buffer[0] = 0b10000000 | opcode; // 按位或
            buffer[1] = payload.length;



            payload.copy(buffer, 2); // 将内容 拷贝到第二个字节之后


            socket.write(buffer); // 服务端给客户端写入内容 




        })

    })

    // 按位与 按位或 异或 掩码

}).listen(30000);
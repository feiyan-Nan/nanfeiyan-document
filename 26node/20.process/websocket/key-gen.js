const crypto = require('crypto');
const code = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';


console.log(crypto.createHash('sha1').update('K7qi8JFPkDn71Ow6xLc7LQ==' + code).digest('base64'))
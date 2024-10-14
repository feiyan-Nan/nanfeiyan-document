const fs = require('fs');
const path = require('path');


const exist = fs.existsSync('t.js');
console.log(exist);

console.log(path.join('/abc', 't.js'));
console.log(path.resolve(__dirname, './abc'));
console.log(path.resolve(__dirname));
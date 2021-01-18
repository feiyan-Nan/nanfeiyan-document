const fs = require('fs').promises;

async function aa() {
  const data = await fs.readFile('./download.js');
  console.log(Buffer.from('data').toString());
  console.log(data);
}
// aa();
let buf = Buffer.alloc(10);
console.log(buf.write('nanfeiyan'));
console.log(buf.toString());

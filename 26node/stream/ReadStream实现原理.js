// ReadStream实现原理
const fs = require('fs');
const EventEmitter = require('events');

class ReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    this.path = path;
    this.options = options;
    this.flags = options.flags || 'r';
    this.highWaterMark = options.highWaterMark || 64 * 1024;
    this.start = options.start || 0;
    this.end = options.end;
    this.fd = null;
    this.open();
    console.log(this.on)
  }
  error(err) {
    this.emit('error', err);
  }
  open() {
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) return this.emit('error', err);
      this.fd = fd;
      this.emit('open', this.fd);
    });
  }
}

new ReadStream('./1.txt')
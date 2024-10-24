const EventEmitter = require("events");
const fs = require("fs");

class WriteStream extends EventEmitter {
  constructor(path, options) {
    super();
    this.path = path;
    this.mode = options.mode || 0o666;
    this.flags = options.flags || "w";
    this.highWaterMark = options.highWaterMark || 16 * 1024;
    this.start = 0;
    this.open(); // 打开可写流
    this.cache = []; // 里面可以缓存我们的数据
    this.len = 0; // 这个就是缓存区的大小（正在写入的数量）
    this.needDrain = false; // 是否需要触发drain
    this.writing = false; // 默认不是正在写入
    this.offset = this.start;
  }
  destroy(err) {
    if (err) return this.emit("error", err);
  }
  open() {
    fs.open(this.path, this.flags, this.mode, (err, fd) => {
      if (err) return this.destroy(err);
      this.fd = fd;
      this.emit("open", fd);
    });
  }
  clear() {
    let cacheObj = this.cache.shift();
    if (cacheObj) {
      let { chunk, encoding, callback } = cacheObj;
      this._write(chunk, encoding, callback);
    } else {
      this.writing = false;
      if (this.needDrain) {
        // 这里当写入完毕后，看一下是否要触发drain事件
        this.needDrain = false;
        this.emit("drain");
      }
    }
  }
  write(chunk, encoding = this.encoding, callback = () => {}) {
    // 用数据库连接 直接链接数据 ，随后就操作数据库 （都是通过发布订阅延迟真正的逻辑）
    // fs.write
    chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    this.len += chunk.length;
    // 写入的个数 超过最高水位线，说明 已经超过预期了，稍后清空后 需要触发drain事件
    this.needDrain = this.len >= this.highWaterMark;

    const clearBuffer = () => {
      // todo...  切片
      callback();
      this.clear(); // 执行写入操作后，在继续清理;
    };

    if (this.writing) {
      // 正在写入
      this.cache.push({
        chunk,
        encoding,
        callback: clearBuffer,
      });
    } else {
      // 不是正在写入
      this.writing = true;
      this._write(chunk, encoding, clearBuffer);
    }
    return !this.needDrain;
  }
  _write(chunk, encoding, callback) {
    if (typeof this.fd !== "number") {
      return this.once("open", () => this._write(chunk, encoding, callback));
    }
    fs.write(this.fd, chunk, 0, chunk.length, this.offset, (err, written) => {
      this.len -= written;
      this.offset += written;
      callback();
    });
  }
}
// 多个异步操作 -》 转换成异步串行
module.exports = WriteStream;

const EventEmitter = require("events");
const fs = require("fs");
class ReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    this.path = path;
    this.flags = options.flags || "r";
    this.highWaterMark = options.highWaterMark || 64 * 1024;
    this.start = options.start || 0;
    this.end = options.end;

    this.open(); // 1.打开文件

    // 2.需要等待用户监听了data事件后再发射
    this.flowing = false;

    this.on("newListener", function (type) {
      if (type === "data" && !this.flowing) {
        // 源码中默认就会先读取数据，但是只有监听了data事件后，才会将数据发射出来
        this.flowing = true;
        this.read();
      }
    });
    this.offset = this.start;
  }
  pause() {
    this.flowing = false;
  }
  resume() {
    if (!this.flowing) {
      this.read();
    }
  }
  read() {
    if (typeof this.fd !== "number") {
      // 文件还没有打开
      return this.once("open", () => this.read());
    }
    // 保证文件肯定打开了
    // 4-4 +1 = 1
    const howMuchToRead = this.end
      ? Math.min(this.end - this.offset + 1, this.highWaterMark)
      : this.highWaterMark;
    const buffer = Buffer.alloc(howMuchToRead);
    fs.read(
      this.fd,
      buffer,
      0,
      buffer.length,
      this.offset,
      (err, bytesRead) => {
        if (bytesRead) {
          this.offset += bytesRead;
          this.emit("data", buffer.slice(0, bytesRead));
          if (this.flowing) this.read();
        } else {
          this.emit("end");
          this.destroy();
        }
      }
    );
  }
  destroy(err) {
    if (err) {
      this.emit("error", err);
    }
    if (typeof this.fd === "number") {
      fs.close(this.fd, () => this.emit("close"));
    }
  }
  open() {
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) return this.destroy(err);

      this.fd = fd;

      this.emit("open", fd);
    });
  }
  pipe(ws) {
    this.on("data", (chunk) => {
      let flag = ws.write(chunk);
      if (!flag) this.pause();
    });

    ws.on("drain", () => {
      this.resume();
    });
  }
}

module.exports = ReadStream;

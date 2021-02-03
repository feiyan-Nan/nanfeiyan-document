const { SyncHook } = require('tapable');

class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      entryOption: new SyncHook(['config']),
      afterPlguins: new SyncHook(['config']),
    };

    let plugins = options.plugins;
    plugins.forEach((plugin) => {
      plugin.apply(this); // 每个插件都有一个apply方法
    });
    // 插件加载完成的钩子
    this.hooks.afterPlguins.call(this);
  }

  run() {}
}

module.exports = Compiler;

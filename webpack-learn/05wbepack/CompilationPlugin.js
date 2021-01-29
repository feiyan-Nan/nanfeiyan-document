class CompilationPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('CompilationPlugin', function (compolation) {
      compolation.hooks.optimize.tap('optimize', function () {
        console.log(compiler);
      });
    });
  }
}
//
module.exports = CompilationPlugin;

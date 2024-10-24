function EventEmitter() {
  this.events = {};
  // this.on = function(event, callback) {
  //   this.events[event] = this.events[event] || [];
  //   this.events[event].push(callback);
  // };
  // this.emit = function(event, data) {
  //   if (this.events[event]) {
  //     this.events[event].forEach(function(callback) {
  //       callback(data);
  //     });
  //   }
  // };
  // this.remove = function(event, callback) {
  //   if (this.events[event]) {
  //     var idx = this .events[event].indexOf(callback);
  //
  // }
}

EventEmitter.prototype = {
  on: () => {},
  emit: () => {},
  remove: () => {}
};
module.exports = EventEmitter;

import Vue from 'vue'
import { Message } from 'element-ui'

Vue.prototype.$message = function (opt) {
  var def = {}
  if (typeof (opt) === 'string') {
    def.message = opt
  } else {
    def = opt
    def.offset = opt.offset || 40
  }
  def.customClass = 'yi-message' + (opt.customClass ? (' ' + opt.customClass) : '')
  if (!opt.iconClass) {
    switch (opt.type) {
      case 'info':
        def.iconClass = 'yi-icon yi-icon-info'
        def.customClass += ' yi-message-info'
        break
      case 'success':
        def.iconClass = 'yi-icon yi-icon-correct-circle'
        def.customClass += ' yi-message-success'
        break
      case 'warning':
        def.iconClass = 'yi-icon yi-icon-warning-circle'
        def.customClass += ' yi-message-warning'
        break
      case 'error':
        def.iconClass = 'yi-icon yi-icon-wrong-circle'
        def.customClass += ' yi-message-error'
        break
      default:
        break
    }
  }
  Message(opt)
}

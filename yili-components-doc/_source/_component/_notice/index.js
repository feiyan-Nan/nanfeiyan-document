
import Vue from 'vue'
import { Notification } from 'element-ui'

Vue.prototype.$notice = function (opt) {
  opt.customClass = opt.customClass || ''
  if (!opt.iconClass) {
    switch (opt.type) {
      case 'info':
        opt.iconClass = 'yi-icon yi-icon-info'
        opt.customClass += ' yi-notice-info'
        break
      case 'success':
        opt.iconClass = 'yi-icon yi-icon-correct-circle'
        opt.customClass += ' yi-notice-success'
        break
      case 'warning':
        opt.iconClass = 'yi-icon yi-icon-warning-circle'
        opt.customClass += ' yi-notice-warning'
        break
      case 'error':
        opt.iconClass = 'yi-icon yi-icon-wrong-circle'
        opt.customClass += ' yi-notice-error'
        break
      default:
        break
    }
    return Notification(opt)
  }
}

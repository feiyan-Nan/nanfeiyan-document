
import Vue from 'vue'
import { MessageBox } from 'element-ui'

Vue.prototype.$alert = function () {
  MessageBox.alert(arguments[0], arguments[1], arguments[2])
  // MessageBox.alert('aaaaa')
}

Vue.prototype.$confirm = function () {
  return MessageBox.confirm(arguments[0], arguments[1], arguments[2])
}

Vue.prototype.$prompt = function () {
  return MessageBox.prompt(arguments[0], arguments[1], arguments[2])
}

Vue.prototype.$msgbox = function (opt) {
  return MessageBox(opt)
}

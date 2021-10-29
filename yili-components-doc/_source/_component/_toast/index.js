
import Vue from 'vue'
import { Message } from 'element-ui'

Vue.prototype.$toast = function (opt) {
  const def = {
    type: '',
    customClass: 'yi-toast' + (opt.customClass ? (' ' + opt.customClass) : '')
  }
  if (typeof opt === 'string') {
    def.message = opt
  } else {
    Object.assign(def, opt)
  }

  Message(def)
}

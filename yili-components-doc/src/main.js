import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui' // TODO
import Const from './constants'
import Util from './utils'
import hljs from 'highlight.js'
import Axios from 'axios'

import './config/component'

import 'highlight.js/styles/vs2015.css' // ir-black isbl-editor-dark.css lightfair shades-of-purple sunburst vs2015
import '@source/_scss/_index.scss'
import '@source/_font'

Vue.prototype.$const = Const
Vue.prototype.$util = Util
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

// Vue.use(ElementUI) // TODO
Vue.use(hljs.vuePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import { createApp, defineComponent, h } from 'vue';
import App from './App.vue';
// h函数 === createElement

// h函数只是createVNode的一个封装
// const App = defineComponent({
//   render() {
//     return h('div', { width: 20 }, 'nanfeiyan');
//   },
// });
createApp(App).mount('#app');

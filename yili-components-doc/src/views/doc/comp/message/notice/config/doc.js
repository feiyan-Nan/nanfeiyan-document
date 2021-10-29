export default {
  options: [
    { prop: 'title', desc: '标题', type: 'string', enum: '', default: '' },
    { prop: 'message', desc: '说明文字', type: 'string/Vue.VNode', enum: '', default: '' },
    { prop: 'dangerouslyUseHTMLString', desc: '是否将 message 属性作为 HTML 片段处理', type: 'boolean', enum: '', default: 'false' },
    { prop: 'type', desc: '主题样式，如果不在可选值内将被忽略', type: 'string', enum: 'success/warning/info/error', default: '' },
    { prop: 'iconClass', desc: '自定义图标的类名', type: 'string', enum: '', default: '' },
    { prop: 'customClass', desc: '自定义类名', type: '自定义类名', enum: '', default: '' },
    { prop: 'duration', desc: '显示时间, 毫秒。设为 0 则不会自动关闭', type: 'string', enum: '', default: '' },
    { prop: 'position', desc: '自定义弹出位置', type: 'string', enum: 'top-right/top-left/bottom-right/bottom-left', default: 'top-right' },
    { prop: 'showClose', desc: '是否显示关闭按钮', type: 'boolean', enum: '', default: 'true' },
    { prop: 'onClose', desc: '关闭时的回调函数', type: 'function', enum: '', default: '' },
    { prop: 'onClick', desc: '点击 Notice 时的回调函数', type: 'function', enum: '', default: '' },
    { prop: 'offset', desc: '偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量', type: 'number', enum: '', default: '0' }
  ]
}

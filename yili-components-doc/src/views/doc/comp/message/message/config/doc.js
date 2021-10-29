export default {
  options: [
    { prop: 'message', desc: '消息文字', type: 'string / VNode', enum: '', default: '' },
    { prop: 'type', desc: '主题', type: 'string', enum: 'success/warning/info/error', default: 'info' },
    { prop: 'iconClass', desc: '自定义图标的类名', type: 'string', enum: '', default: '' },
    { prop: 'dangerouslyUseHTMLString', desc: '是否将 message 属性作为 HTML 片段处理', type: 'boolean', enum: '', default: 'false' },
    { prop: 'customClass', desc: '自定义类名', type: 'string', enum: '', default: '' },
    { prop: 'duration', desc: '显示时间, 毫秒。设为 0 则不会自动关闭', type: 'number', enum: '', default: '3000' },
    { prop: 'showClose', desc: '是否显示关闭按钮', type: 'boolean', enum: '', default: 'false' },
    { prop: 'center', desc: '文字是否居中', type: 'boolean', enum: '', default: 'false' },
    { prop: 'onClose', desc: '关闭时的回调函数, 参数为被关闭的 message 实例', type: 'function', enum: '', default: '' },
    { prop: 'offset', desc: 'Message 距离窗口顶部的偏移量', type: 'number', enum: '', default: '40' }
  ],

  event: [
    { name: 'close', desc: '关闭当前的 Message', callback: '' }
  ]
}

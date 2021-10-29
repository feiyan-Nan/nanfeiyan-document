export default {
  prop: [
    { prop: 'type', desc: '类型', type: 'string', enum: 'success/info/warning/danger', default: '' },
    { prop: 'closable', desc: '是否可关闭', type: 'boolean', enum: '', default: 'false' },
    { prop: 'disable-transitions', desc: '是否禁用渐变动画', type: 'boolean', enum: '', default: 'false' },
    { prop: 'hit', desc: '是否有边框描边', type: 'boolean', enum: '', default: 'false' },
    { prop: 'color', desc: '背景色', type: 'string', enum: '', default: '' },
    { prop: 'size', desc: '尺寸', type: 'string', enum: 'medium / small / mini', default: '' },
    { prop: 'effect', desc: '主题', type: 'string', enum: 'dark / light / plain', default: 'light' }
  ],

  event: [
    { name: 'click', desc: '点击 Tag 时触发的事件', callback: '' },
    { name: 'close', desc: '关闭 Tag 时触发的事件', callback: '' }
  ]

}

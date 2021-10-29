export default {
  prop: [
    { prop: 'visible', desc: '是否显示 Dialog，支持 .sync 修饰符', type: 'boolean', enum: '', default: 'false' },
    { prop: 'title', desc: 'Dialog 的标题，也可通过具名 slot （见下表）传入', type: 'string', enum: '', default: '' },
    { prop: 'width', desc: 'Dialog 的宽度', type: 'string', enum: '', default: '50%' },
    { prop: 'fullscreen', desc: '是否为全屏 Dialog', type: 'boolean', enum: '', default: 'false' },
    { prop: 'top', desc: 'Dialog CSS 中的 margin-top 值', type: 'string', enum: '', default: '15vh' },
    { prop: 'modal', desc: '是否需要遮罩层', type: 'boolean', enum: '', default: 'true' },
    { prop: 'modal-append-to-body', desc: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上', type: 'boolean', enum: '', default: 'true' },
    { prop: 'append-to-body', desc: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true', type: 'boolean', enum: '', default: 'false' },
    { prop: 'lock-scroll', desc: '是否在 Dialog 出现时将 body 滚动锁定', type: 'boolean', enum: '', default: 'true' },
    { prop: 'custom-class', desc: 'Dialog 的自定义类名', type: 'string', enum: '', default: '' },
    { prop: 'close-on-click-modal', desc: '是否可以通过点击 modal 关闭 Dialog', type: 'boolean', enum: '', default: 'true' },
    { prop: 'close-on-press-escape', desc: '是否可以通过按下 ESC 关闭 Dialog', type: 'boolean', enum: '', default: 'true' },
    { prop: 'show-close', desc: '是否显示关闭按钮', type: 'boolean', enum: '', default: 'true' },
    { prop: 'before-close', desc: '关闭前的回调，会暂停 Dialog 的关闭', type: 'function(done)，done 用于关闭 Dialog', enum: '', default: '' },
    { prop: 'center', desc: '是否对头部和底部采用居中布局', type: 'boolean', enum: '', default: 'false' },
    { prop: 'destroy-on-close', desc: '关闭时销毁 Dialog 中的元素', type: 'boolean', enum: '', default: 'false' }
  ],

  event: [
    { name: 'open', desc: 'Dialog 打开的回调', callback: '' },
    { name: 'opened', desc: 'Dialog 打开动画结束时的回调', callback: '' },
    { name: 'close', desc: 'Dialog 关闭的回调', callback: '' },
    { name: 'closed', desc: 'Dialog 关闭动画结束时的回调', callback: '' }
  ],

  slot: [
    { name: '', desc: 'Dialog 的内容' },
    { name: 'title', desc: 'Dialog 标题区的内容' },
    { name: 'footer', desc: 'Dialog 按钮操作区的内容' }
  ]
}

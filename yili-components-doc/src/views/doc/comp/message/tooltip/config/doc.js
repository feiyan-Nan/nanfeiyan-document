export default {
  prop: [
    { prop: 'effect', desc: '默认提供的主题', type: 'String', enum: 'dark/light', default: 'dark' },
    { prop: 'content', desc: '显示的内容，也可以通过 slot#content 传入 DOM', type: 'String', enum: '', default: '' },
    { prop: 'placement', desc: 'Tooltip 的出现位置', type: 'boolean', enum: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end', default: 'bottom' },
    { prop: 'value / v-model', desc: '状态是否可见', type: 'String', enum: '', default: 'bottom' },
    { prop: 'value', desc: '', type: 'boolean', enum: '', default: 'false' },
    { prop: 'disabled', desc: 'Tooltip 是否可用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'offset', desc: '出现位置的偏移量', type: 'Number', enum: '', default: '0' },
    { prop: 'transition', desc: '定义渐变动画', type: 'String', enum: '', default: 'el-fade-in-linear' },
    { prop: 'visible-arrow', desc: '是否显示 Tooltip 箭头', type: 'boolean', enum: '', default: 'true' },
    { prop: 'popper-options', desc: 'popper.js 的参数', type: 'Object', enum: '', default: '{ boundariesElement: \'body\', gpuAcceleration: false }' },
    { prop: 'open-delay', desc: '延迟出现，单位毫秒', type: 'Number', enum: '', default: '0' },
    { prop: 'manual', desc: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效', type: 'boolean', enum: '', default: 'false' },
    { prop: 'popper-class', desc: '为 Tooltip 的 popper 添加类名', type: 'String', enum: '', default: 'false' },
    { prop: 'enterable', desc: '鼠标是否可进入到 tooltip 中', type: 'boolean', enum: '', default: 'true' },
    { prop: 'hide-after', desc: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏', type: 'number', enum: '', default: '0' },
    { prop: 'tabindex', desc: 'Tooltip 组件的 tabindex', type: 'number', enum: '', default: '0' }
  ]
}

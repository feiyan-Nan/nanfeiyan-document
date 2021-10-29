export default {
  prop: [
    { prop: 'value / v-model', desc: '绑定值', type: 'number', enum: '', default: '0' },
    { prop: 'min', desc: '最小值', type: 'number', enum: '', default: '0' },
    { prop: 'max', desc: '最大值', type: 'number', enum: '', default: '100' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'step', desc: '步长', type: 'number', enum: '', default: '1' },
    { prop: 'show-input', desc: '是否显示输入框，仅在非范围选择时有效', type: 'boolean', enum: '', default: 'false' },
    { prop: 'show-input-controls', desc: '在显示输入框的情况下，是否显示输入框的控制按钮', type: 'boolean', enum: '', default: 'true' },
    { prop: 'input-size', desc: '输入框的尺寸', type: 'string', enum: 'large / medium / small / mini', default: 'small' },
    { prop: 'show-stops', desc: '是否显示间断点', type: 'boolean', enum: '', default: 'false' },
    { prop: 'show-tooltip', desc: '是否显示 tooltip', type: 'boolean', enum: '', default: 'true' },
    { prop: 'format-tooltip', desc: '格式化 tooltip message', type: 'function(value)', enum: '', default: '' },
    { prop: 'range', desc: '是否为范围选择', type: 'boolean', enum: '', default: 'false' },
    { prop: 'vertical', desc: '是否竖向模式', type: 'boolean', enum: '', default: 'false' },
    { prop: 'height', desc: 'Slider 高度，竖向模式时必填', type: 'string', enum: '', default: '' },
    { prop: 'label', desc: '屏幕阅读器标签', type: 'string', enum: '', default: '' },
    { prop: 'debounce', desc: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效', type: 'number', enum: '', default: '300' },
    { prop: 'tooltip-class', desc: 'tooltip 的自定义类名', type: 'string', enum: '', default: '' },
    { prop: 'marks', desc: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式', type: 'object', enum: '', default: '' }
  ],

  event: [
    { name: 'change', desc: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）', callback: '改变后的值' },
    { name: 'input', desc: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）', callback: '改变后的值' }
  ]
}

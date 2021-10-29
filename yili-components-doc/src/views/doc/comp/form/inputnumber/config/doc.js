export default {
  prop: [
    { prop: 'value / v-model', desc: '绑定值', type: 'number', enum: '', default: '0' },
    { prop: 'min', desc: '设置计数器允许的最小值', type: 'number', enum: '', default: '-Infinity' },
    { prop: 'max', desc: '设置计数器允许的最大值', type: 'number', enum: '', default: 'Infinity' },
    { prop: 'step', desc: '计数器步长', type: 'number', enum: '', default: '1' },
    { prop: 'step-strictly', desc: '是否只能输入 step 的倍数', type: 'boolean', enum: '', default: 'false' },
    { prop: 'precision', desc: '数值精度', type: 'number', enum: '', default: '' },
    { prop: 'size', desc: '计数器尺寸', type: 'string', enum: 'large, small', default: '' },
    { prop: 'disabled', desc: '是否禁用计数器', type: 'boolean', enum: '', default: 'false' },
    { prop: 'controls', desc: '是否使用控制按钮', type: 'boolean', enum: '', default: 'true' },
    { prop: 'controls-position', desc: '控制按钮位置', type: 'string', enum: 'right', default: '' },
    { prop: 'name', desc: '原生属性', type: 'string', enum: '', default: '' },
    { prop: 'label', desc: '输入框关联的label文字', type: 'string', enum: '', default: '' },
    { prop: 'placeholder', desc: '输入框默认 placeholder', type: 'string', enum: '', default: '' }
  ],

  event: [
    { name: 'change', desc: '绑定值被改变时触发', callback: 'currentValue, oldValue' },
    { name: 'blur', desc: '在组件 Input 失去焦点时触发', callback: '(event: Event' },
    { name: 'focus', desc: '在组件 Input 获得焦点时触发', callback: '(event: Event)' }
  ],

  method: [
    { name: 'focus', desc: '使 input 获取焦点', params: '' },
    { name: 'select', desc: '选中 input 中的文字', params: '' }
  ]
}

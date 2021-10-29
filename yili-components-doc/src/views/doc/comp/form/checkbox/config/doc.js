export default {
  checkboxProp: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'label', desc: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）', type: 'Any' },
    { prop: 'true-label', desc: '选中时的值', type: 'string / number' },
    { prop: 'false-label', desc: '没有选中时的值', type: 'string / number' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'border', desc: '是否显示边框', type: 'boolean', enum: '', default: 'false' },
    { prop: 'size', desc: 'Checkbox 的尺寸，仅在 border 为真时有效', type: 'boolean', enum: '', default: 'false' },
    { prop: 'border', desc: '是否显示边框', type: 'string', enum: 'medium / small / mini', default: '' },
    { prop: 'checked', desc: '当前是否勾选', type: 'boolean', enum: '', default: 'false' }
  ],

  checkboxEvent: [
    { name: 'change', desc: '当绑定值变化时触发的事件', callback: '更新后的值' }
  ],

  checkboxGroupProp: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'size', desc: '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效', type: 'string', enum: 'medium / small / mini', default: '' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'min', desc: '可被勾选的 checkbox 的最小数量', type: 'number', enum: '', default: '' },
    { prop: 'max', desc: '可被勾选的 checkbox 的最大数量', type: 'number', enum: '', default: '' }
  ],

  checkboxGroupEvent: [
    { name: 'change', desc: '当绑定值变化时触发的事件', callback: '更新后的值' }
  ],

  checkboxButtonProp: [
    { prop: 'label', desc: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）', type: 'Any' },
    { prop: 'true-label', desc: '选中时的值', type: 'string / number' },
    { prop: 'false-label', desc: '没有选中时的值', type: 'string / number' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'checked', desc: '当前是否勾选', type: 'boolean', enum: '', default: 'false' }
  ]
}

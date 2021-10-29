export default {
  radioPropData: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'val', desc: '单选按钮的值', type: 'Any', enum: '', default: '' },
    { prop: 'type', desc: '类型', type: 'String', enum: 'primary/success/warning/error/info', default: 'primary' },
    { prop: 'size', desc: '尺寸', type: 'String', enum: 'lg/md/sm', default: 'md' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', enum: '', default: 'false' }
  ],

  radioGroupPropData: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'options', desc: '数据对象', type: 'Array', enum: '', default: '[]' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', enum: '', default: 'false' }
  ],

  radioEventData: [
    { name: 'change', desc: '值改变时出发', callback: '绑定值' }
  ]
}

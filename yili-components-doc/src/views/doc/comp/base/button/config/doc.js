export default {
  buttonPropData: [
    { prop: 'size', desc: '按钮尺寸', type: 'String', enum: 'lg/md/sm', default: 'md' },
    { prop: 'type', desc: '按钮风格类型', type: 'String', enum: 'primary/success/warning/error/info', default: 'primary' },
    { prop: 'line', desc: '是否是线性按钮', type: 'Boolean', default: 'false' },
    { prop: 'dashed', desc: '是否是虚线按钮', type: 'Boolean', default: 'false' },
    { prop: 'radius', desc: '是否是圆角按钮', type: 'Boolean', default: 'false' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', default: 'false' },
    { prop: 'invalid', desc: '是否是不可用状态', type: 'Boolean', default: 'false' }
  ],

  buttonGroupPropData: [
    { prop: 'gutter', desc: '按钮间距', type: 'Number', default: '16' },
    { prop: 'group', desc: '是否是按钮组', type: 'Boolean', default: 'false' },
    { prop: 'vertical', desc: '是否是垂直状态', type: 'Boolean', default: 'false' }
  ]
}

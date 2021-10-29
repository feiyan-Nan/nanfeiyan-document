export default {
  tabProp: [
    { prop: 'value / v-model', desc: '绑定值，选中选项卡的 name', type: 'string', enum: '', default: '第一个选项卡的 name' },
    { prop: 'type', desc: '风格类型', type: 'string', enum: 'card/border-card', default: '' },
    { prop: 'closable', desc: '标签是否可关闭', type: 'boolean', enum: '', default: 'false' },
    { prop: 'addable', desc: '标签是否可增加', type: 'boolean', enum: '', default: 'false' },
    { prop: 'editable', desc: '标签是否同时可增加和关闭', type: '', enum: 'boolean', default: 'false' },
    { prop: 'tab-position', desc: '选项卡所在位置', type: 'string', enum: 'top/right/bottom/left', default: 'top' },
    { prop: 'stretch', desc: '标签的宽度是否自撑开', type: 'boolean', enum: '', default: 'false' },
    { prop: 'before-leave', desc: '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。', type: 'Function(activeName, oldActiveName)', enum: '', default: '' }
  ],

  tabEvent: [
    { name: 'tab-click', desc: 'tab 被选中时触发', callback: '被选中的标签 tab 实例' },
    { name: 'tab-remove', desc: '点击 tab 移除按钮后触发', callback: '被删除的标签的 name' },
    { name: 'tab-add', desc: '点击 tabs 的新增按钮后触发', callback: '' },
    { name: 'edit', desc: '点击 tabs 的新增按钮或 tab 被关闭后触发', callback: '(targetName, action)' }
  ],

  tabpaneProp: [
    { prop: 'label', desc: '选项卡标题', type: 'string', enum: '', default: '' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'name', desc: '与选项卡绑定值 value 对应的标识符，表示选项卡别名', type: 'string', enum: '', default: '该选项卡在选项卡列表中的顺序值，如第一个选项卡则为"1"' },
    { prop: 'closable', desc: '标签是否可关闭', type: 'boolean', enum: '', default: 'false' },
    { prop: 'lazy', desc: '标签是否延迟渲染', type: 'boolean', enum: '', default: 'false' }
  ]
}

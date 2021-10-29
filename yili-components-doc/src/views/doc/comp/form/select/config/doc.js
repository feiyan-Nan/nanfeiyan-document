export default {
  selectProp: [
    { prop: 'value/v-model', desc: '绑定值', type: 'boolean / string / number', enum: '', default: '' },
    { prop: 'multiple', desc: '是否多选', type: 'boolean', enum: '', default: 'false' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'value-key', desc: '作为 value 唯一标识的键名，绑定值为对象类型时必填', type: 'string', enum: '', default: 'value' },
    { prop: 'size', desc: '输入框尺寸', type: 'string', enum: 'medium/small/mini', default: '' },
    { prop: 'clearable', desc: '是否可以清空选项', type: 'boolean', enum: '', default: 'false' },
    { prop: 'collapse-tags', desc: '多选时是否将选中值按文字的形式展示', type: 'boolean', enum: '', default: 'false' },
    { prop: 'multiple-limit', desc: '多选时用户最多可以选择的项目数，为 0 则不限制', type: 'number', enum: '', default: '0' },
    { prop: 'name', desc: 'select input 的 name 属性', type: 'string', enum: '', default: '' },
    { prop: 'autocomplete', desc: 'select input 的 autocomplete 属性', type: 'string', enum: '', default: 'off' },
    { prop: 'placeholder', desc: '占位符', type: 'string', enum: '', default: '请选择' },
    { prop: 'filterable', desc: '是否可搜索', type: 'boolean', enum: '', default: 'false' },
    { prop: 'filter-method', desc: '自定义搜索方法', type: 'function', enum: '', default: '' },
    { prop: 'remote', desc: '是否为远程搜索', type: 'boolean', enum: '', default: 'false' },
    { prop: 'remote-method', desc: '远程搜索方法', type: 'function', enum: '', default: '' },
    { prop: 'loading', desc: '是否正在从远程获取数据', type: 'boolean', enum: '', default: 'false' },
    { prop: 'loading-text', desc: '远程加载时显示的文字', type: 'string', enum: '', default: '加载中' },
    { prop: 'no-match-text', desc: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置', type: 'string', enum: '', default: '无匹配数据' },
    { prop: 'no-data-text', desc: '选项为空时显示的文字，也可以使用slot="empty"设置', type: 'string', enum: '', default: '无数据' },
    { prop: 'popper-class', desc: 'Select 下拉框的类名', type: 'string', enum: '', default: '' },
    { prop: 'reserve-keyword', desc: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词', type: 'boolean', enum: '', default: 'false' },
    { prop: 'default-first-option', desc: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'popper-append-to-body', desc: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false', type: 'boolean', enum: '', default: 'true' },
    { prop: 'automatic-dropdown', desc: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单', type: 'boolean', enum: '', default: 'false' }
  ],

  selectEvent: [
    { name: 'change', desc: '选中值发生变化时触发', callback: '目前的选中值' },
    { name: 'visible-change', desc: '下拉框出现/隐藏时触发', callback: '出现则为 true，隐藏则为 false' },
    { name: 'remove-tag', desc: '多选模式下移除tag时触发', callback: '移除的tag值' },
    { name: 'clear', desc: '可清空的单选模式下用户点击清空按钮时触发', callback: '' },
    { name: 'blur', desc: '当 input 失去焦点时触发', callback: '' },
    { name: 'focus', desc: '当 input 获得焦点时触发', callback: '' }
  ],

  selectSlot: [
    { name: '', desc: 'Option 组件列表' },
    { name: 'prefix', desc: 'Select 组件头部内容' },
    { name: 'empty', desc: '无选项时的列表' }
  ],

  optionGroupProp: [
    { prop: 'label', desc: '分组的组名', type: 'string', enum: '', default: '' },
    { prop: 'disabled', desc: '是否将该分组下所有选项置为禁用', type: 'boolean', enum: '', default: 'false' }
  ],

  optionProp: [
    { prop: 'value', desc: '选项的值', type: 'string/number/object', enum: '', default: '' },
    { prop: 'label', desc: '选项的标签，若不设置则默认与 value 相同', type: 'string/number', enum: '', default: '' },
    { prop: 'disabled', desc: '是否禁用该选项', type: 'boolean', enum: '', default: 'false' }
  ],

  methods: [
    { name: 'focus', desc: '使 input 获取焦点', params: '' },
    { name: 'blur', desc: '使 input 失去焦点，并隐藏下拉框', params: '' }
  ]
}

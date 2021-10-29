export default {
  prop: [
    { prop: 'small', desc: '是否使用小型分页样式', type: 'boolean', enum: '', default: 'false' },
    { prop: 'background', desc: '是否为分页按钮添加背景色', type: 'boolean', enum: '', default: 'false' },
    { prop: 'page-size', desc: '每页显示条目个数，支持 .sync 修饰符', type: 'number', enum: '', default: '10' },
    { prop: 'total', desc: '总条目数', type: 'number', enum: '', default: '' },
    { prop: 'page-count', desc: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性', type: 'Number', enum: '', default: '' },
    { prop: 'pager-count', desc: '页码按钮的数量，当总页数超过该值时会折叠', type: 'number', enum: '大于等于 5 且小于等于 21 的奇数', default: '7' },
    { prop: 'current-page', desc: '当前页数，支持 .sync 修饰符', type: 'number', enum: '', default: '1' },
    { prop: 'layout', desc: '组件布局，子组件名用逗号分隔', type: 'String', enum: 'sizes, prev, pager, next, jumper, ->, total, slot', default: 'prev, pager, next, jumper, ->, total' },
    { prop: 'page-sizes', desc: '每页显示个数选择器的选项设置', type: 'number[]', enum: '', default: '[10, 20, 30, 40, 50, 100]' },
    { prop: 'popper-class', desc: '每页显示个数选择器的下拉框类名', type: 'string', enum: '', default: '' },
    { prop: 'prev-text', desc: '替代图标显示的上一页文字', type: 'string', enum: '', default: '' },
    { prop: 'next-text', desc: '替代图标显示的下一页文字', type: 'string', enum: '', default: '' },
    { prop: 'disabled', desc: '是否禁用', type: 'boolean', enum: '', default: 'false' },
    { prop: 'hide-on-single-page', desc: '只有一页时是否隐藏', type: 'boolean', enum: '', default: '' }
  ],

  event: [
    { name: 'size-change', desc: 'pageSize 改变时会触发', callback: '每页条数' },
    { name: 'current-change', desc: 'currentPage 改变时会触发', callback: '当前页' },
    { name: 'prev-click', desc: '用户点击上一页按钮改变当前页后触发', callback: '当前页' },
    { name: 'next-click', desc: '用户点击下一页按钮改变当前页后触发', callback: '当前页' }
  ],

  slot: [
    { name: '', desc: '自定义内容，需要在 layout 中列出 slot' }
  ]
}

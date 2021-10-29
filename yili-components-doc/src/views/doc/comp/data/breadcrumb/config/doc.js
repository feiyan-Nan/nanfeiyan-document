export default {
  BreadcrumbProp: [
    { prop: 'separator', desc: '分隔符', type: 'string', enum: '', default: '斜杠\'/\'' },
    { prop: 'separator-class', desc: '图标分隔符 class', type: 'string', enum: '', default: '' }
  ],

  BreadcrumbItemProp: [
    { prop: 'to', desc: '路由跳转对象，同 vue-router 的 to', type: 'string/object', enum: '', default: '' },
    { prop: 'replace', desc: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录', type: 'boolean', enum: '', default: 'false' }
  ]

}

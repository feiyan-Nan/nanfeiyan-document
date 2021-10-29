export default {
  rowPropData: [
    { prop: 'gutter', desc: '栅格间距', type: 'Number', default: '0' },
    { prop: 'around', desc: '设置gutter的情况下，是否保持外层容易两侧也拥有一样的间距', type: 'Boolean', enum: '', default: 'false' },
    { prop: 'justify', desc: '水平排列方式', type: 'String', enum: 'start/end/center/space-around/space-between', default: 'start' },
    { prop: 'align', desc: '垂直排列方式', type: 'String', enum: 'top/middle/bottom', default: 'top' },
    { prop: 'space', desc: '容器下边距', type: 'Number', enum: '', default: '0' }
  ],

  colPropData: [
    { prop: 'span', desc: '占据列数', type: 'Number', default: '24' },
    { prop: 'offset', desc: '列偏移值', type: 'Number', default: '0' }
  ]
}

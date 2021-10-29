export default {
  layoutPropData: [
    { prop: 'vertical', desc: '子元素的排列方向', type: 'String', enum: 'vertical/horizontal', default: 'vertical' }
  ],
  headerPropData: [
    { prop: 'height', desc: '头部元素高度', type: 'String', default: '64px' }
  ],
  asidePropData: [
    { prop: 'width', desc: '侧边栏宽度', type: 'String', default: '264px' }
  ],
  footerPropData: [
    { prop: 'height', desc: '底部元素高度', type: 'String', default: '64px' }
  ],

  mainPropData: [
    { prop: 'padding', desc: '容器内边距', type: 'String', default: '20px' }
  ]
}

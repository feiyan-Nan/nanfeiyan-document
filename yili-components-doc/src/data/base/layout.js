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
  ],
  codeLayout:
`<yi-layout>
  <yi-header>Header</yi-header>
  <yi-layout>
    <yi-aside>Aside</yi-aside>
    <yi-main>Main</yi-main>
  </yi-layout>
  <yi-footer>Footer</yi-footer>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-main>Main</yi-main>
  <yi-footer>Footer</yi-footer>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-main>Main</yi-main>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-layout>
    <yi-aside>Aside</yi-aside>
    <yi-layout>
      <yi-main>Main</yi-main>
      <yi-footer>Footer</yi-footer>
    </yi-layout>
  </yi-layout>

</yi-layout>

<yi-layout>
  <yi-aside>Aside</yi-aside>
  <yi-layout>
    <yi-header>Header</yi-header>
    <yi-main>Main</yi-main>
    <yi-footer>Footer</yi-footer>
  </yi-layout>
</yi-layout>
`
}

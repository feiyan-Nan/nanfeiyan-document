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
  ],

  codeBase:
`<yi-row :space="8">
  <yi-col>24/24</yi-col>
</yi-row>
<yi-row :space="8">
  <yi-col :span="12">12/24</yi-col>
  <yi-col :span="12">12/24</yi-col>
</yi-row>
<yi-row :space="8">
  <yi-col :span="8">8/24</yi-col>
  <yi-col :span="8">8/24</yi-col>
  <yi-col :span="8">8/24</yi-col>
</yi-row>
<yi-row :space="8">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>
<yi-row>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
  <yi-col :span="3">3/24</yi-col>
</yi-row> `,

  codeOffset:
`<yi-row :space="8">
  <yi-col :span="4">4/24</yi-col>
  <yi-col :offset="8" :span="4">4/24 offset 8</yi-col>
  <yi-col :span="4">4/24</yi-col>
  <yi-col :span="4">4/24</yi-col>
</yi-row>
<yi-row :space="8">
  <yi-col :span="6" :offset="6">6/24 offset 6</yi-col>
  <yi-col :span="6" :offset="6">6/24 offset 6</yi-col>
</yi-row>`,

  codeGutter:
`<yi-row :gutter="20" :space="8" around>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>

<yi-row :gutter="20">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>`,

  codeJustify:
`<yi-row :space="8">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>
<yi-row :space="8" justify="end">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>
<yi-row :space="8" justify="center">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>
<yi-row :space="8" justify="space-between">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>

<yi-row justify="space-around">
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
  <yi-col :span="6">6/24</yi-col>
</yi-row>`,

  codeAlign:
`<yi-row :space="8" align="top">
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
  <yi-col :span="8">8/24</yi-col>
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
</yi-row>

<yi-row :space="8" align="middle">
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
  <yi-col :span="8">8/24</yi-col>
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
</yi-row>

<yi-row :space="8" align="bottom">
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
  <yi-col :span="8">8/24</yi-col>
  <yi-col :span="8">
    <div style="height: 120px;line-height: 120px;">8/24</div>
  </yi-col>
</yi-row>`
}

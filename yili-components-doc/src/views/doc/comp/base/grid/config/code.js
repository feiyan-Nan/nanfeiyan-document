const base = {
  name: 'GridBase',
  template:
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
</yi-row> `
}

const offset = {
  name: 'GridOffset',
  template:
  `<yi-row :space="8">
  <yi-col :span="4">4/24</yi-col>
  <yi-col :offset="8" :span="4">4/24 offset 8</yi-col>
  <yi-col :span="4">4/24</yi-col>
  <yi-col :span="4">4/24</yi-col>
</yi-row>
<yi-row :space="8">
  <yi-col :span="6" :offset="6">6/24 offset 6</yi-col>
  <yi-col :span="6" :offset="6">6/24 offset 6</yi-col>
</yi-row>`
}

const gutter = {
  name: 'GridGutter',
  template:
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
</yi-row>`
}

const justify = {
  name: 'GridJustify',
  template:
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
</yi-row>`
}

const align = {
  name: 'GridAlign',
  template:
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

export default {
  base, offset, gutter, justify, align
}

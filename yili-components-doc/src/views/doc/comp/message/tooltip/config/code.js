const base = {
  name: 'TooltipBase',
  template:
  `<yi-row>
  <yi-col :span="3" :offset="3">
    <yi-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <yi-button line type="info">上左</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <yi-button line type="info">上边</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <yi-button line type="info">上右</yi-button>
    </yi-tooltip>
  </yi-col>
</yi-row>

<yi-row :space="8">
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <yi-button line type="info">左上</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3" :offset="9">
    <yi-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <yi-button line type="info">右上</yi-button>
    </yi-tooltip>
  </yi-col>
</yi-row>

<yi-row :space="8">
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <yi-button line type="info">左边</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3" :offset="9">
    <yi-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <yi-button line type="info">右边</yi-button>
    </yi-tooltip>
  </yi-col>
</yi-row>

<yi-row :space="8">
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <yi-button line type="info">左下</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3" :offset="9">
    <yi-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <yi-button line type="info">右下</yi-button>
    </yi-tooltip>
  </yi-col>
</yi-row>

<yi-row>
  <yi-col :span="3" :offset="3">
    <yi-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <yi-button line type="info">下左</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <yi-button line type="info">下边</yi-button>
    </yi-tooltip>
  </yi-col>
  <yi-col :span="3">
    <yi-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <yi-button line type="info">下右</yi-button>
    </yi-tooltip>
  </yi-col>
</yi-row>`
}

const theme = {
  name: 'TooltipTheme',
  template:
    `<yi-button-group>
  <yi-tooltip content="Top center" placement="top">
    <yi-button line type="info">Dark</yi-button>
  </yi-tooltip>

  <yi-tooltip content="Bottom center" placement="bottom" effect="light">
    <yi-button line type="info">Light</yi-button>
  </yi-tooltip>
</yi-button-group>`
}

const content = {
  name: 'TooltipContent',
  template:
  `<yi-tooltip placement="top">
  <div slot="content">
    <p>自定义</p>
    <p>文本</p>
  </div>
  <yi-button line type="info">Top center</yi-button>
</yi-tooltip>`
}

export default {
  base, theme, content
}

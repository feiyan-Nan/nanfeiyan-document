const base = {
  name: 'ButtonBase',
  template:
  `<yi-button-group style="margin-bottom: 16px;">
  <yi-button type="primary">主要按钮</yi-button>
  <yi-button type="success">成功按钮</yi-button>
  <yi-button type="warning">提示按钮</yi-button>
  <yi-button type="error">错误按钮</yi-button>
  <yi-button type="info">信息按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" line>主要按钮</yi-button>
  <yi-button type="success" line>成功按钮</yi-button>
  <yi-button type="warning" line>提示按钮</yi-button>
  <yi-button type="error" line>错误按钮</yi-button>
  <yi-button type="info" line>信息按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" dashed>主要按钮</yi-button>
  <yi-button type="success" dashed>成功按钮</yi-button>
  <yi-button type="warning" dashed>提示按钮</yi-button>
  <yi-button type="error" dashed>错误按钮</yi-button>
  <yi-button type="info" dashed>信息按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" text>主要按钮</yi-button>
  <yi-button type="success" text>成功按钮</yi-button>
  <yi-button type="warning" text>提示按钮</yi-button>
  <yi-button type="error" text>错误按钮</yi-button>
  <yi-button type="info" text>信息按钮</yi-button>
</yi-button-group>

<yi-button-group>
  <yi-button type="primary" radius>主要按钮</yi-button>
  <yi-button type="success" radius>成功按钮</yi-button>
  <yi-button type="warning" radius>提示按钮</yi-button>
  <yi-button type="error" radius>错误按钮</yi-button>
  <yi-button type="info" radius>信息按钮</yi-button>
  </yi-button-group>`
}

const size = {
  name: 'ButtonSize',
  template:
  `<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" size="lg">大尺寸按钮</yi-button>
  <yi-button type="primary" size="md">常规尺寸按钮</yi-button>
  <yi-button type="primary" size="sm">小尺寸按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" line size="lg">大尺寸按钮</yi-button>
  <yi-button type="primary" line size="md">常规尺寸按钮</yi-button>
  <yi-button type="primary" line size="sm">小尺寸按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" dashed size="lg">大尺寸按钮</yi-button>
  <yi-button type="primary" dashed size="md">常规尺寸按钮</yi-button>
  <yi-button type="primary" dashed size="sm">小尺寸按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" >
  <yi-button type="primary" text size="lg">大尺寸按钮</yi-button>
  <yi-button type="primary" text size="md">常规尺寸按钮</yi-button>
  <yi-button type="primary" text size="sm">小尺寸按钮</yi-button>
</yi-button-group>

<yi-button-group>
  <yi-button type="primary" radius size="lg">大尺寸按钮</yi-button>
  <yi-button type="primary" radius size="md">常规尺寸按钮</yi-button>
  <yi-button type="primary" radius size="sm">小尺寸按钮</yi-button>
</yi-button-group>`
}

const disabled = {
  name: 'ButtonDisabled',
  template:
  `<yi-button-group>
  <yi-button type="primary" disabled>主要按钮</yi-button>
  <yi-button type="primary" line disabled>线性按钮</yi-button>
  <yi-button type="primary" dashed disabled>虚线按钮</yi-button>
  <yi-button type="primary" text disabled>文字按钮</yi-button>
  <yi-button type="primary" radius disabled>圆角按钮</yi-button>
</yi-button-group>`
}

const invalid = {
  name: 'ButtonInvalid',
  template:
  `<yi-button-group>
  <yi-button type="primary" invalid>主要按钮</yi-button>
  <yi-button type="primary" line invalid>线性按钮</yi-button>
  <yi-button type="primary" dashed invalid>虚线按钮</yi-button>
  <yi-button type="primary" text invalid>文字按钮</yi-button>
  <yi-button type="primary" radius invalid>圆角按钮</yi-button>
</yi-button-group>`
}

const group = {
  name: 'ButtonGroup',
  template:
  `<yi-button-group :gutter="24" style="margin-bottom: 16px;">
  <yi-button type="primary">主要按钮</yi-button>
  <yi-button type="success">成功按钮</yi-button>
  <yi-button type="warning">提示按钮</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" group>
  <yi-button type="primary">首页</yi-button>
  <yi-button type="primary">上一页</yi-button>
  <yi-button type="primary">下一页</yi-button>
  <yi-button type="primary">末页</yi-button>
</yi-button-group>

<yi-button-group style="margin-bottom: 16px;" group>
  <yi-button type="primary" line>首页</yi-button>
  <yi-button type="primary" line>上一页</yi-button>
  <yi-button type="primary" line>下一页</yi-button>
  <yi-button type="primary" line>末页</yi-button>
</yi-button-group>

<yi-button-group group vertical style="margin-bottom: 16px;" >
  <yi-button type="primary">首页</yi-button>
  <yi-button type="primary">上一页</yi-button>
  <yi-button type="primary">下一页</yi-button>
  <yi-button type="primary">末页</yi-button>
</yi-button-group>

<yi-button-group group vertical>
  <yi-button type="primary" line>首页</yi-button>
  <yi-button type="primary" line>上一页</yi-button>
  <yi-button type="primary" line>下一页</yi-button>
  <yi-button type="primary" line>末页</yi-button>
</yi-button-group>`
}

export default {
  base, size, disabled, invalid, group
}

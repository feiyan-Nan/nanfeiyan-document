export default {
  buttonPropData: [
    { prop: 'size', desc: '按钮尺寸', type: 'String', enum: 'lg/md/sm', default: 'md' },
    { prop: 'type', desc: '按钮风格类型', type: 'String', enum: 'primary/success/warning/error/info', default: 'primary' },
    { prop: 'line', desc: '是否是线性按钮', type: 'Boolean', default: 'false' },
    { prop: 'dashed', desc: '是否是虚线按钮', type: 'Boolean', default: 'false' },
    { prop: 'radius', desc: '是否是圆角按钮', type: 'Boolean', default: 'false' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', default: 'false' },
    { prop: 'invalid', desc: '是否是不可用状态', type: 'Boolean', default: 'false' }
  ],

  buttonGroupPropData: [
    { prop: 'gutter', desc: '按钮间距', type: 'Number', default: '16' },
    { prop: 'group', desc: '是否是按钮组', type: 'Boolean', default: 'false' },
    { prop: 'vertical', desc: '是否是垂直状态', type: 'Boolean', default: 'false' }
  ],

  codeBase:
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
</yi-button-group>
`,
  codeSize:
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
</yi-button-group>
`,
  codeDisabled:
`<yi-button-group>
  <yi-button type="primary" disabled>主要按钮</yi-button>
  <yi-button type="primary" line disabled>线性按钮</yi-button>
  <yi-button type="primary" dashed disabled>虚线按钮</yi-button>
  <yi-button type="primary" text disabled>文字按钮</yi-button>
  <yi-button type="primary" radius disabled>圆角按钮</yi-button>
</yi-button-group>
`,
  codeInvalid:
`<yi-button-group>
  <yi-button type="primary" invalid>主要按钮</yi-button>
  <yi-button type="primary" line invalid>线性按钮</yi-button>
  <yi-button type="primary" dashed invalid>虚线按钮</yi-button>
  <yi-button type="primary" text invalid>文字按钮</yi-button>
  <yi-button type="primary" radius invalid>圆角按钮</yi-button>
</yi-button-group>
`,
  codeGroup:
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
</yi-button-group>
`
}

export default {
  radioPropData: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'val', desc: '单选按钮的值', type: 'Any', enum: '', default: '' },
    { prop: 'type', desc: '类型', type: 'String', enum: 'primary/success/warning/error/info', default: 'primary' },
    { prop: 'size', desc: '尺寸', type: 'String', enum: 'lg/md/sm', default: 'md' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', enum: '', default: 'false' }
  ],

  radioGroupPropData: [
    { prop: 'model', desc: '绑定值', type: 'Any' },
    { prop: 'options', desc: '数据对象', type: 'Array', enum: '', default: '[]' },
    { prop: 'disabled', desc: '是否禁用', type: 'Boolean', enum: '', default: 'false' }
  ],

  radioEventData: [
    { name: 'change', desc: '值改变时出发', callback: '绑定值' }
  ],

  codeBase:
`<yi-radio v-model="baseRadio" label="1">周一</yi-radio>
<yi-radio v-model="baseRadio" label="2">周二</yi-radio>
<yi-radio v-model="baseRadio" label="3">周三</yi-radio>
<yi-radio v-model="baseRadio" label="4">周四</yi-radio>
<yi-radio v-model="baseRadio" label="5">周五</yi-radio>
`,
  codeType:
`<yi-radio v-model="typeRadio" ype="primary" val="primary">主要单选按钮</yi-radio>
<yi-radio v-model="typeRadio" type="success" val="success">成功单选按钮</yi-radio>
<yi-radio v-model="typeRadio" type="warning" val="warning">提示单选按钮</yi-radio>
<yi-radio v-model="typeRadio" type="error" val="error">错误单选按钮</yi-radio>
<yi-radio v-model="typeRadio" type="info" val="info">信息单选按钮</yi-radio>
`,

  codeSize:
`<yi-radio v-model="sizeRadio" size="lg" val="lg">大尺寸单选按钮</yi-radio>
<yi-radio v-model="sizeRadio" type="md" val="md">默认单选按钮</yi-radio>
<yi-radio v-model="sizeRadio" type="sm" val="sm">小尺寸单选按钮</yi-radio>
`,
  codeDisabled:
`<yi-radio v-model="disabledRadio" disabled val="1">周一</yi-radio>
<yi-radio v-model="disabledRadio" disabled val="2">周二</yi-radio>
<yi-radio v-model="disabledRadio" disabled val="3">周三</yi-radio>
<yi-radio v-model="disabledRadio" disabled val="4">周四</yi-radio>
<yi-radio v-model="disabledRadio" disabled val="5">周五</yi-radio>
`,

  codeGroup:
`<template>
  <yi-radio-group v-model="groupRadio">
    <yi-radio val="1">周一</yi-radio>
    <yi-radio val="2">周二</yi-radio>
    <yi-radio val="3">周三</yi-radio>
    <yi-radio val="4">周四</yi-radio>
    <yi-radio val="5">周五</yi-radio>
  </yi-radio-group>

  <yi-radio-group v-model="groupOptionRadio" :options="groupOptions"></yi-radio-group>

  <yi-radio-group v-model="groupDisabledRadio" disabled>
    <yi-radio val="1">周一</yi-radio>
    <yi-radio val="2">周二</yi-radio>
    <yi-radio val="3">周三</yi-radio>
    <yi-radio val="4">周四</yi-radio>
    <yi-radio val="5">周五</yi-radio>
  </yi-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        groupOptions: [
          { label: '周一', val: '1' },
          { label: '周二', val: '2' },
          { label: '周三', val: '3' },
          { label: '周四', val: '4' },
          { label: '周五', val: '5' }
        ]
      }
    }
  }
</script>
`
}

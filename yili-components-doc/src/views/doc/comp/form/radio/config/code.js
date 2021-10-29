const base = {
  name: 'RadioBase',
  template:
    `<yi-radio v-model="radio" val="1">周一</yi-radio>
    <yi-radio v-model="radio" val="2">周二</yi-radio>
    <yi-radio v-model="radio" val="3">周三</yi-radio>
    <yi-radio v-model="radio" val="4">周四</yi-radio>
    <yi-radio v-model="radio" val="5">周五</yi-radio>`,
  data: {
    radio: '1'
  }
}

const type = {
  name: 'RadioType',
  template:
  `<yi-radio v-model="radio" type="primary" val="primary">主要单选按钮</yi-radio>
  <yi-radio v-model="radio" type="success" val="success">成功单选按钮</yi-radio>
  <yi-radio v-model="radio" type="warning" val="warning">提示单选按钮</yi-radio>
  <yi-radio v-model="radio" type="error" val="error">错误单选按钮</yi-radio>
  <yi-radio v-model="radio" type="info" val="info">信息单选按钮</yi-radio>`,
  data: {
    radio: 'primary'
  }
}

const size = {
  name: 'RadioSize',
  template:
  `<yi-radio v-model="radio" size="lg" val="lg">大尺寸单选按钮</yi-radio>
  <yi-radio v-model="radio" type="md" val="md">默认单选按钮</yi-radio>
  <yi-radio v-model="radio" type="sm" val="sm">小尺寸单选按钮</yi-radio>`,
  data: {
    radio: 'md'
  }
}

const disabled = {
  name: 'RadioDisabled',
  template:
  `<yi-radio v-model="radio" disabled val="1">周一</yi-radio>
  <yi-radio v-model="radio" disabled val="2">周二</yi-radio>
  <yi-radio v-model="radio" disabled val="3">周三</yi-radio>
  <yi-radio v-model="radio" disabled val="4">周四</yi-radio>
  <yi-radio v-model="radio" disabled val="5">周五</yi-radio>`,
  data: {
    radio: '1'
  }
}

const group = {
  name: 'RadioGroup',
  template:
  `<yi-radio-group v-model="radio">
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
  </yi-radio-group>`,
  data: {
    radio: '1',
    groupOptionRadio: '1',
    groupDisabledRadio: '1',
    groupOptions: [
      { label: '周一', val: '1' },
      { label: '周二', val: '2' },
      { label: '周三', val: '3' },
      { label: '周四', val: '4' },
      { label: '周五', val: '5' }
    ]
  }
}

export default {
  base, type, size, disabled, group
}

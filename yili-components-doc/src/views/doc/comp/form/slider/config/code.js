const base = {
  name: 'SliderBase',
  template:
    `<div class="block">
    <span class="demonstration">默认</span>
    <yi-slider v-model="value1"></yi-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <yi-slider v-model="value2"></yi-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <yi-slider v-model="value3" :show-tooltip="false"></yi-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <yi-slider v-model="value4" :format-tooltip="formatTooltip"></yi-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <yi-slider v-model="value5" disabled></yi-slider>
  </div>`,
  data: {
    value1: 0,
    value2: 50,
    value3: 36,
    value4: 48,
    value5: 42
  },
  methods: {
    formatTooltip (val) {
      return val / 100
    }
  }
}

export default {
  base
}

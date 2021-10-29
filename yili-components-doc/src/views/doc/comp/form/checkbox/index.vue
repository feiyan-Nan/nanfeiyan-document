<template>
  <div class="ycp-checkbox ycp-doc">
    <section class="ycp-doc-item">
      <header>CheckBox 多选按钮</header>
      <p class="content">多选按钮</p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>禁用状态</header>
      <ycp-view :content="config.disabled"></ycp-view>
    </section>

    <section class="ycp-doc-item">
      <header>多选框组</header>
      <ycp-view :content="config.group" />
    </section>

    <section class="ycp-doc-item">
      <header>全选/非全选</header>
      <ycp-view :content="config.checkAll" />
    </section>

    <section class="ycp-doc-item">
      <header>数量限制</header>
      <ycp-view :content="config.limit" />
    </section>

    <ycp-doc-item header="Checkbox 属性"
                  :data="DocConfig.checkboxProp" />

    <ycp-doc-item header="Checkbox 事件"
                  type="event"
                  :data="DocConfig.checkboxEvent" />

    <ycp-doc-item header="CheckboxGroup 属性"
                  :data="DocConfig.checkboxGroupProp" />

    <ycp-doc-item header="CheckboxGroup 事件"
                  type="event"
                  :data="DocConfig.checkboxGroupEvent" />

    <ycp-doc-item header="CheckboxButton 属性"
                  :data="DocConfig.checkboxButtonProp" />

  </div>
</template>

<script>
import DocConfig from './config/doc'
import CodeConfig from './config/code'
export default {
  name: '',
  data () {
    return {
      DocConfig,

      config: ''
    }
  },
  created () {
    this.config = this.$util.getCode(CodeConfig)
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

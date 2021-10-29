<template>
  <div class="ycp-button ycp-doc">
    <section class="ycp-doc-item">
      <header>Button 按钮</header>
      <p class="content">常用的操作按钮。</p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>不同尺寸</header>
      <ycp-view :content="config.size" />
    </section>

    <section class="ycp-doc-item">
      <header>禁用状态</header>
      <ycp-view :content="config.disabled" />
    </section>

    <section class="ycp-doc-item">
      <header>不可用状态</header>
      <ycp-view :content="config.invalid" />
    </section>

    <section class="ycp-doc-item">
      <header>按钮组</header>
      <ycp-view :content="config.group" />
    </section>

    <ycp-doc-item header="Button 属性"
                  :data="DocConfig.buttonPropData" />

    <ycp-doc-item header="Button Group 属性"
                  :data="DocConfig.buttonGroupPropData" />
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
      config: {}
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

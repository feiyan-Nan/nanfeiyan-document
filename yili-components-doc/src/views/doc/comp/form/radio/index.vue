<template>
  <div class="ycp-radio ycp-doc">
    <section class="ycp-doc-item">
      <header>Radio 单选按钮</header>
      <p class="content">单选按钮</p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>类型区分</header>
      <ycp-view :content="config.type" />
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
      <header>单选按钮组</header>
      <ycp-view :content="config.group" />
    </section>

    <ycp-doc-item header="Radio 属性"
                  :data="DocConfig.radioPropData" />

    <ycp-doc-item header="Radio 属性"
                  type="event"
                  :data="DocConfig.radioEventData" />

    <ycp-doc-item header="Radio Group 属性"
                  :data="DocConfig.radioGroupPropData" />
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
      CodeConfig
    }
  },
  watch: {
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

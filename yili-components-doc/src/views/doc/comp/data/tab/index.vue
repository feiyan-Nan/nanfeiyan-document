<template>
  <div class="ycp-tabs ycp-doc">
    <section class="ycp-doc-item">
      <header>Tabs 标签页</header>
      <p class="content"></p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>选项卡样式</header>
      <ycp-view :content="config.card" />
    </section>

    <section class="ycp-doc-item">
      <header>位置</header>
      <ycp-view :content="config.position" />
    </section>

    <section class="ycp-doc-item">
      <header>Tabs 属性</header>
      <ycp-prop-list :data="DocConfig.tabProp" />
    </section>

    <section class="ycp-doc-item">
      <header>Tabs 事件</header>
      <ycp-event-list :data="DocConfig.tabEvent" />
    </section>

    <section class="ycp-doc-item">
      <header>TabPane 属性</header>
      <ycp-prop-list :data="DocConfig.tabpaneProp" />
    </section>
  </div>
</template>

<script>
import DocConfig from './config/doc'
import CodeConfig from './config/code'
export default {
  name: '',
  data () {
    return {
      DocConfig
    }
  },
  props: {
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

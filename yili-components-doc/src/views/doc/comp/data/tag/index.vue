<template>
  <div class="ycp-dialog ycp-doc">
    <section class="ycp-doc-item">
      <header>Tag 标签</header>
      <p class="content"></p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>属性</header>
      <ycp-prop-list :data="DocConfig.prop" />
    </section>

    <section class="ycp-doc-item">
      <header>事件</header>
      <ycp-event-list :data="DocConfig.event" />
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

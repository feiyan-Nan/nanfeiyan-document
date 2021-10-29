<template>
  <div class="ycp-checkbox ycp-doc">
    <section class="ycp-doc-item">
      <header>Message 全局消息</header>
      <p class="content">pc端全局提示消息</p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />

    </section>
    <section class="ycp-doc-item">
      <header>可关闭消息</header>
      <ycp-view :content="config.close" />
    </section>

    <section class="ycp-doc-item">
      <header>配置</header>
      <ycp-prop-list :data="DocConfig.options" />
    </section>

    <section class="ycp-doc-item">
      <header>方法</header>
      <ycp-method-list type="method"
                       :data="DocConfig.event" />
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

<template>
  <div class="ycp-checkbox ycp-doc">
    <section class="ycp-doc-item">
      <header>Notice 通知</header>
      <p class="content">悬浮出现在页面角落，显示全局的通知提醒消息。</p>
    </section>

    <section class="ycp-doc-item">
      <header>基本用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>不同类型</header>
      <ycp-view :content="config.type" />
    </section>

    <section class="ycp-doc-item">
      <header>配置</header>
      <ycp-prop-list :data="DocConfig.options" />
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

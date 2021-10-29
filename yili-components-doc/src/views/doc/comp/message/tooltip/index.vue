<template>
  <div class="ycp-checkbox ycp-doc">
    <section class="ycp-doc-item">
      <header>Tooltip 提示文字</header>
      <p class="content"></p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <p class="content">在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>主题</header>
      <p class="content">Tooltip 组件提供了两个不同的主题：dark和light</p>
      <ycp-view :content="config.theme" />
    </section>

    <section class="ycp-doc-item">
      <header>自定义内容</header>
      <p class="content">提示复杂格式文本</p>
      <ycp-view :content="config.content" />
    </section>

    <section class="ycp-doc-item">
      <header>属性</header>
      <ycp-prop-list :data="DocConfig.prop" />
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

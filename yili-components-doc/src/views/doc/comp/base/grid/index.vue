<template>
  <div class="ycp-grid ycp-doc">
    <section class="ycp-doc-item">
      <header>Grid 栅格</header>
      <p class="content">通过基础的 24 分栏，迅速简便地创建布局。</p>
    </section>

    <section class="ycp-doc-item">
      <header>组件概述</header>
      <p class="content">我们定义了两个概念，行<span>row</span>和列col</p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>栅格偏移</header>
      <ycp-view :content="config.offset" />
    </section>

    <section class="ycp-doc-item">
      <header>栅格间隔</header>
      <ycp-view :content="config.gutter" />
    </section>

    <section class="ycp-doc-item">
      <header>水平对齐方式</header>
      <ycp-view :content="config.justify" />
    </section>

    <section class="ycp-doc-item">
      <header>垂直对齐方式</header>
      <ycp-view :content="config.align" />
    </section>

    <ycp-doc-item header="Row 属性"
                  :data="DocConfig.rowPropData" />

    <ycp-doc-item header="Col 属性"
                  :data="DocConfig.colPropData" />

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

<style lang='scss'>
@import "./index";
</style>

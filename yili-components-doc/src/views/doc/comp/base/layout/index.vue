<template>
  <div class="ycp-layout ycp-doc">
    <section class="ycp-doc-item">
      <header>Layout 布局</header>
      <p class="content">协助进行页面级整体布局。</p>
    </section>

    <section class="ycp-doc-item">
      <header>组件概述</header>
      <p class="content">
      <p>
        <ycp-tag content="<yi-container>" />
        ：外层容器。当子元素中包含
        <ycp-tag content="<yi-header>" />
        或
        <ycp-tag content="<yi-footer>" />
        时，全部子元素会垂直上下排列，否则会水平左右排列。
      </p>

      <p>
        <ycp-tag content="<yi-header>" />
        : 头部容器。
      </p>

      <p>
        <ycp-tag content="<yi-aside>" />
        : 侧边栏容器。
      </p>

      <p>
        <ycp-tag content="<yi-main>" />
        : 内容容器。
      </p>

      <p>
        <ycp-tag content="<yi-footer>" />
        : 底部容器。
      </p>

      <p>
        <ycp-tag content="<yi-container>" />
        内只能是
        <ycp-tag content="<yi-header>" />
        <ycp-tag content="<yi-aside>" />
        <ycp-tag content="<yi-main>" />
        <ycp-tag content="<yi-footer>" />
        同时
        <ycp-tag content="<yi-header>" />
        <ycp-tag content="<yi-aside>" />
        <ycp-tag content="<yi-main>" />
        <ycp-tag content="<yi-footer>" />
        也必须在
        <ycp-tag content="<yi-container>" />
        中。
      </p>
    </section>

    <section class="ycp-doc-item">
      <header>常见页面布局</header>
      <ycp-view :content="config.base"></ycp-view>
    </section>

    <ycp-doc-item header="Layout 属性"
                  :data="DocConfig.layoutPropData" />

    <ycp-doc-item header="Header 属性"
                  :data="DocConfig.headerPropData" />

    <ycp-doc-item header="Aside 属性"
                  :data="DocConfig.asidePropData" />

    <ycp-doc-item header="Footer 属性"
                  :data="DocConfig.footerPropData" />

    <ycp-doc-item header="Main 属性"
                  :data="DocConfig.mainPropData" />

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

<style lang="scss">
@import "./index";
</style>

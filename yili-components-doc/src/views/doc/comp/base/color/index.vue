<template>
  <div class="ycp-color ycp-doc">
    <section class="ycp-doc-item">
      <header>Color 色彩</header>
      <p class="content">伊利组件库推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
    </section>

    <section class="ycp-doc-item">
      <header>主色</header>
      <p class="content">伊利组件库推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
      <yi-row :gutter="20"
              class="limit-container">
        <yi-col>
          <div class="color-item yi-bg-primary">Primary : #32B0F6</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-hover">Hover : #49BCFC</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-active"
               style="background: ">Active : #0E87CF</div>
        </yi-col>
      </yi-row>
    </section>

    <section class="ycp-doc-item">
      <header>辅助色</header>
      <p class="content">辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
      <yi-row :gutter="20"
              class="limit-container">
        <yi-col>
          <div class="color-item yi-bg-info">Info：#777777</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-success">Success : #46C779</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-warning">Warning : #FFBC4D</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-error">Error : #F86640</div>
        </yi-col>
      </yi-row>
    </section>

    <section class="ycp-doc-item">
      <header>中性色</header>
      <p class="content">中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
      <yi-row :gutter="20"
              :space="20"
              class="limit-container">
        <yi-col>
          <div class="color-item yi-bg-title">标题 Title：#202020</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-content">正文 Content : #3C3C3C</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-info">辅助/图标 Info : #777777</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-tip">辅助文案 Tip: #A0A0A0</div>
        </yi-col>
      </yi-row>

      <yi-row :gutter="20"
              class="limit-container">
        <yi-col>
          <div class="color-item yi-bg-border"
               style="color: #202020;">边框 Border :#CCCCCC</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-divider"
               style="color: #202020;">分割线 Divider : #E0E0E0</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-disabled"
               style="color: #202020;">失效 Disabled : #EEEEEE</div>
        </yi-col>
        <yi-col>
          <div class="color-item yi-bg-background"
               style="color: #202020;">背景 Background : #F5F5F5</div>
        </yi-col>
      </yi-row>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  created () {
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

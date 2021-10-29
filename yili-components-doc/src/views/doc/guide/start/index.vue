<template>
  <div class="ycp-start">
    <div class="ycp-doc">
      <section class="ycp-doc-item">
        <header>关于伊利组件库</header>
        <p class="content">伊利组件库是一套基于 Vue.js 的开源 UI 组件库，主要服务于 伊利集团PC 界面的中后台产品。</p>
      </section>

      <section class="ycp-doc-item">
        <header>安装</header>
        <p class="content">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <ycp-highlight :code="code"
                       language="shell"></ycp-highlight>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      code: 'npm install yili-component -D'
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

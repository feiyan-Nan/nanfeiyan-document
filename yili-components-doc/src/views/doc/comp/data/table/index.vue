<template>
  <div class="ycp-dialog ycp-doc">
    <section class="ycp-doc-item">
      <header>Table 表格</header>
      <p class="content"></p>
    </section>

    <section class="ycp-doc-item">
      <header>基础用法</header>
      <ycp-view :content="config.base" />
    </section>

    <section class="ycp-doc-item">
      <header>Table 属性</header>
      <ycp-prop-list :data="DocConfig.tableProp" />
    </section>

    <section class="ycp-doc-item">
      <header>Table 事件</header>
      <ycp-event-list :data="DocConfig.tableEvent" />
    </section>

    <section class="ycp-doc-item">
      <header>Table 方法</header>
      <ycp-method-list :data="DocConfig.tableMethod" />
    </section>

    <section class="ycp-doc-item">
      <header>Table 插槽</header>
      <ycp-slot-list :data="DocConfig.tableSlot" />
    </section>

    <section class="ycp-doc-item">
      <header>TableColumn 属性</header>
      <ycp-prop-list :data="DocConfig.tableColumnProp" />
    </section>

    <section class="ycp-doc-item">
      <header>TableColumn 插槽</header>
      <ycp-slot-list :data="DocConfig.tableColumnSlot" />
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

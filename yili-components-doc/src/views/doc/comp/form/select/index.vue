<template>
  <div>
    <div class="ycp-select ycp-doc">
      <section class="ycp-doc-item">
        <header>Select 选择器</header>
        <p class="content">选择器</p>
      </section>

      <section class="ycp-doc-item">
        <header>基础用法</header>
        <ycp-view :content="config.base" />
      </section>

      <section class="ycp-doc-item">
        <header>禁用状态</header>
        <ycp-view :content="config.disabled" />
      </section>

      <section class="ycp-doc-item">
        <header>有禁用选项</header>
        <ycp-view :content="config.disabledOption" />
      </section>

      <section class="ycp-doc-item">
        <header>可清空单选</header>
        <ycp-view :content="config.clear" />
      </section>

      <section class="ycp-doc-item">
        <header>可多选选项</header>
        <ycp-view :content="config.multiple" />
      </section>

      <section class="ycp-doc-item">
        <header>可折叠收起多选选项</header>
        <ycp-view :content="config.collapse" />
      </section>

      <section class="ycp-doc-item">
        <header>自定义模版</header>
        <ycp-view :content="config.template" />
      </section>

      <section class="ycp-doc-item">
        <header>可搜索</header>
        <ycp-view :content="config.search" />
      </section>

      <section class="ycp-doc-item">
        <header>Select 属性</header>
        <ycp-prop-list :data="DocConfig.selectProp" />
      </section>

      <section class="ycp-doc-item">
        <header>Select 事件</header>
        <ycp-event-list :data="DocConfig.selectEvent" />
      </section>

      <section class="ycp-doc-item">
        <header>Select 插槽</header>
        <ycp-slot-list :data="DocConfig.selectSlot" />
      </section>

      <section class="ycp-doc-item">
        <header>Option Group 属性</header>
        <ycp-prop-list :data="DocConfig.optionGroupProp" />
      </section>

      <section class="ycp-doc-item">
        <header>Option 属性</header>
        <ycp-prop-list :data="DocConfig.optionProp" />
      </section>

      <section class="ycp-doc-item">
        <header>Select 方法</header>
        <ycp-method-list :data="DocConfig.methods" />
      </section>
    </div>
  </div>
</template>

<script>
import DocConfig from './config/doc'
import CodeConfig from './config/code'
export default {
  name: '',
  data () {
    return {
      DocConfig,
      options: [{
        value: '1',
        label: '北京'
      }, {
        value: '2',
        label: '上海'
      }, {
        value: '3',
        label: '天津'
      }, {
        value: '4',
        label: '重庆',
        disabled: true
      }, {
        value: '5',
        label: '深圳'
      }],
      baseSelect: '',
      disabledSelect: '',
      disabledOptionSelect: '',
      clearSelect: '',
      multipleSelect: '',
      multipleCollapseSelect: '',
      templateSelect: '',
      searchSelect: ''
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

<style lang='scss' scoped>
@import "./index";
</style>

<template>
  <div>
    <div class="ycp-input ycp-doc">
      <section class="ycp-doc-item">
        <header>Input 输入框</header>
        <p class="content">多选按钮</p>
      </section>

      <section class="ycp-doc-item">
        <header>基础用法</header>
        <ycp-view :code="''">
          <div class="content">
            <!-- <div style="width: 200px;">
              <yi-input v-model="baseInput"
                        placeholder="普通文本框"></yi-input>
            </div> -->

            <!-- <div style="width: 200px;">
              <yi-input v-model="disabledInput"
                        disabled
                        placeholder="禁用状态"></yi-input>
            </div> -->

            <!-- <div style="width: 200px;">
              <yi-input placeholder="请输入密码"
                        v-model="passwordInput"
                        show-password></yi-input>
            </div> -->

            <!-- <div style="width: 200px;">
              <yi-input placeholder="限制长度"
                        v-model="lengthInput"
                        maxlength="10"
                        show-word-limit></yi-input>
            </div> -->
          </div>
        </ycp-view>
      </section>

      <section class="ycp-doc-item">
        <header>Input 属性</header>
        参照element-ui Input Attributes
      </section>

      <section class="ycp-doc-item">
        <header>Input 插槽</header>
        参照element-ui Input Slots
      </section>

      <section class="ycp-doc-item">
        <header>Input 事件</header>
        参照element-ui Input Events
      </section>

      <section class="ycp-doc-item">
        <header>Input 方法</header>
        参照element-ui Input Methods
      </section>

      <section class="ycp-doc-item">
        <header>其他</header>
        更多配置以及input用法 参照element-ui Input
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
      baseInput: '',
      disabledInput: '',
      passwordInput: '',
      lengthInput: ''
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

<template>
  <div class="ycp-view limit-container">
    <v-runtime-template :template="runTemplate"
                        v-if="content"></v-runtime-template>
    <slot v-else></slot>

    <div class="code-content"
         v-if="content && content.code">

      <ycp-highlight :language="language"
                     :code="content.code"
                     v-show="codeShow" />
      <div class="toggle"
           @click="codeShow = !codeShow">
        <i class="el-icon-arrow-down"
           v-if="!codeShow"></i>
        <i class="el-icon-arrow-up"
           v-else></i>
        显示代码
      </div>
    </div>
  </div>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'
export default {
  name: 'ycp-view',
  data () {
    return {
      codeShow: false
    }
  },
  props: {
    content: {
    },

    template: {
      type: String
    },
    code: {
      type: String
    },
    language: {
      type: String,
      default: 'html'
    }
  },
  created () {

  },
  mounted () {
  },
  computed: {
    runTemplate () {
      return `
        <div class="content">
          <Ycp${this.content.name} />
        </div>
      `
    }
  },
  methods: {
  },
  components: {
    VRuntimeTemplate
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

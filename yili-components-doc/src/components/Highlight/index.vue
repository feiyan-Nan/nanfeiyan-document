<template>
  <highlightjs :language='language'
               :code="code"
               class="ycy-coder" />
</template>

<script>
export default {
  name: 'ycp-highlight',
  data () {
    return {
    }
  },
  props: {
    code: {
      type: String,
      default: ''
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

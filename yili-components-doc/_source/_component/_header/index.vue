<template>
  <header class="yi-header"
          :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'YiHeader',
  data () {
    return {
    }
  },
  props: {
    height: {
      type: String,
      default: '64px'
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

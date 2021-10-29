<template>
  <section class="yi-main">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'YiMain',
  data () {
    return {
    }
  },
  props: {
    padding: {
      type: String,
      default: '20px'
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

<template>
  <aside class="yi-aside"
         :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'YiAside',
  data () {
    return {
    }
  },
  props: {
    width: {
      type: String,
      default: '264px'
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

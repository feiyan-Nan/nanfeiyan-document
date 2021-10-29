<template>
  <div :class="classes"
       :style="{'--gutter': gutter}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YiCol',
  data () {
    return {
    }
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      dufault: 0
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    gutter () {
      return `${this.$parent.gutter || 0}px`
    },
    classes () {
      const classes = ['yi-col', 'yi-col-' + this.span]
      if (this.offset) classes.push('yi-col-offset-' + this.offset)
      return classes
    }
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

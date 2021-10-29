<template>
  <section class="yi-layout"
           :class="{'vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'YiLayout',
  data () {
    return {
    }
  },
  props: {
    direction: {
      type: String
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    isVertical () {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'yi-header' || tag === 'yi-footer'
        })
        : false
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

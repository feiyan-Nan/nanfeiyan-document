<template>
  <div :class="['yi-button-group', {
    'group': group,
    'vertical': vertical
  }]"
       :style="{'--gutter': `${ group ? 0: gutter }px`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YiButtonGroup',
  data () {
    return {
    }
  },
  props: {
    gutter: {
      type: Number,
      default: 16
    },

    group: {
      type: Boolean,
      default: false
    },

    vertical: {
      type: Boolean,
      default: false
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

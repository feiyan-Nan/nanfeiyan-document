<template>
  <div :class="classes"
       :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YiRow',
  data () {
    return {
    }
  },
  props: {
    space: {
      type: Number,
      default: 0
    },
    gutter: {
      type: Number,
      defualt: 0
    },
    around: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    style () {
      const style = {}
      if (this.space) style.marginBottom = `${this.space}px`

      if (this.gutter && this.around) {
        style.paddingLeft = `${this.gutter}px`
        style.paddingRight = `${this.gutter}px`
      }
      return style
    },

    classes () {
      const classes = ['yi-row', 'justify-' + this.justify, 'align-' + this.align]

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

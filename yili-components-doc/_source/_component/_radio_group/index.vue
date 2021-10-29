<template>
  <div class="yi-radio-group">
    <slot v-if="options.length === 0"></slot>
    <template v-else
              v-for="item in options">
      <yi-radio :key="item.val"
                :val="item.val">{{ item.label }}</yi-radio>
    </template>
  </div>
</template>

<script>
export default {
  name: 'YiRadioGroup',
  data () {
    return {
    }
  },
  props: {
    value: {},
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
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

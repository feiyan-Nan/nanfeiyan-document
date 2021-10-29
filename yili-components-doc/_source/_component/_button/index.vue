<template>
  <button :class="[type, size, {
    'yi-button': !line && !dashed && !text,
    'yi-button-line': line || dashed || text,
    'dashed': dashed,
    'text': text,
    'radius': radius,
    'disabled': disabled,
    'invalid': invalid
  }]"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'YiButton',
  data () {
    return {
    }
  },
  props: {
    // sm/md/lg
    size: {
      type: String,
      default: 'md'
    },
    // primary/success/warning/error/info
    type: {
      type: String,
      default: 'primary'
    },
    line: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },

    radius: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>

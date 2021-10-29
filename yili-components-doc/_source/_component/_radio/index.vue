<template>
  <label :class="['yi-radio', type, size, {'checked': model === val, 'disabled': isDisabled}]">
    <span class="yi-radio--input">
      <input ref="radio"
             type="radio"
             :disabled="isDisabled"
             v-model="model"
             :value="val"
             :name="name"
             @change="handleChange" />
    </span>
    <span class="yi-raido--label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'YiRadio',
  data () {
    return {
    }
  },
  props: {
    value: {},
    val: {},
    type: {
      type: String,
      default: ''
    },
    name: String,
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
  },
  mounted () {
    console.log(this.disalbed)
  },
  computed: {
    isGroup () {
      return this.$parent.$options._componentTag === 'yi-radio-group'
    },

    radioGroup () {
      return this.isGroup ? this.$parent : null
    },
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this.radioGroup.$emit('input', val)
        } else {
          this.$emit('input', val)
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.val)
        }
      }
    },

    isDisabled () {
      return this.isGroup ? this.radioGroup.disabled : this.disabled
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

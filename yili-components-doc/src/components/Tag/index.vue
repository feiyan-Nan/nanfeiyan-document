<template>
  <span class="ycp-tag">{{ content }}</span>
</template>

<script>
export default {
  name: 'ycp-tag',
  data () {
    return {
    }
  },
  props: {
    content: {
      type: String,
      required: true
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

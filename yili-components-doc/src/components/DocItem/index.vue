<template>
  <section class="ycp-doc-item">
    <header>{{ header }}</header>
    <ycp-prop-list :data="data"
                   v-if="type === 'prop'" />
    <ycp-event-list :data="data"
                    v-else-if="type === 'event'" />
  </section>
</template>

<script>
export default {
  name: 'ycpDocItem',
  data () {
    return {
    }
  },
  props: {
    header: {
      type: String,
      required: true
    },
    data: {
    },

    type: {
      type: String,
      default: 'prop'
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
</style>

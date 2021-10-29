<template>
  <menu-item-group>

    <template slot="title"
              class="title">
      <div :class="{'root-title':root}">
        {{ menuItem.text }}
      </div>
    </template>
    <template v-for="item in menuItem.children">
      <ycp-menu-item-group :key="item.path"
                           v-if="item.children"
                           :menuItem="item" />
      <menu-item v-else
                 :index="'/doc/' + item.path"
                 :key="item.path">{{ item.text }}</menu-item>

    </template>
  </menu-item-group>
</template>

<script>
import { MenuItemGroup, MenuItem } from 'element-ui'
export default {
  name: 'ycp-menu-item-group',
  data () {
    return {
    }
  },
  props: {
    menuItem: {
      type: Object,
      required: true
    },
    root: {
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
    MenuItemGroup, MenuItem
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

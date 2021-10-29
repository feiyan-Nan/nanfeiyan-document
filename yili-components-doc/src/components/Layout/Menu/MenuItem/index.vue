<template>
  <menu-item class="menu-item"
             v-if="!menuItem.children"
             :index="'/doc/' + menuItem.path">
    <i :class="menuItem.icon"
       v-if="menuItem.icon"></i>
    <span slot="title">{{ menuItem.text }}</span>
  </menu-item>

  <submenu v-else
           :index="'/doc/' + menuItem.path">
    <template class="menu-item"
              slot="title">
      <i :class="menuItem.icon"
         v-if="menuItem.icon"></i>
      <span>{{ menuItem.text }}</span>
    </template>
    <ycp-menu-item v-for="item in menuItem.children"
                   :menuItem="item"
                   :key="item.id">
    </ycp-menu-item>
  </submenu>
</template>

<script>
import { Submenu, MenuItem } from 'element-ui'
export default {
  name: 'ycp-menu-item',
  data () {
    return {

    }
  },
  props: {
    menuItem: {
      type: Object,
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
    Submenu, MenuItem
  },
  watch: {
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

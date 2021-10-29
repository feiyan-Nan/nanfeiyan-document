<template>
  <nav class="menu">
    <Menu :default-active="$route.path"
          router>
      <template v-for="item in menuItems">
        <MenuItemGroup :menuItem="item"
                       root
                       :key="item.path" />
      </template>
    </Menu>

  </nav>
</template>

<script>
import MenuItemGroup from './MenuItemGroup'
import { Menu } from 'element-ui'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
    }
  },

  props: {
    isCollapse: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },

  computed: {
    ...mapGetters({
      menuItems: 'Menu/getMenuItems'
    })
  },

  components: {
    MenuItemGroup, Menu
  },

  mounted () {
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

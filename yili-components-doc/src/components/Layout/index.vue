<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="logo">
        <img :src="$const.imageUrl + 'layout/logo-default.png'">
        <span>伊利组件库</span>
      </div>
    </el-header>
    <el-container class="layout-content">
      <el-aside width="240px">
        <Menu />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { Container, Aside, Main, Header } from 'element-ui'
import Menu from './Menu'
export default {
  name: '',
  data () {
    return {
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
    Menu,
    ElHeader: Header,
    ElContainer: Container,
    ElAside: Aside,
    ElMain: Main
  }
}
</script>

<style lang='scss' scoped>
@import "./index";
</style>

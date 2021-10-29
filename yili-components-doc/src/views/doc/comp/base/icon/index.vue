<template>
  <div class="ycp-icon ycp-doc">
    <section class="ycp-doc-item">
      <header>Icon 图标</header>
      <p class="content">定义了普通字体图标和彩色图标两种图标库</p>
    </section>

    <section class="ycp-doc-item">
      <header>普通字体图标</header>
      <p class="content">统一前缀 yi-icon yi-icon-xxxx</p>
      <div class="icons">
        <ul>
          <template v-for="icon in normalIcons.glyphs">
            <li :key="icon.icon_id">
              <i :class="'yi-icon yi-icon-' + icon.font_class"></i>
              <div class="desc yi-h6">{{'yi-icon-' + icon.font_class}}</div>
              <div class="opera">
                <div class="copy">
                  <yi-button text>复制代码</yi-button>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </section>

    <section class="ycp-doc-item">
      <header>彩色图标</header>
      <p class="content">统一前缀 #yi-iconc-xxxx</p>
      <div class="icons-color">
        <ul>
          <template v-for="icon in colorIcons.glyphs">
            <li :key="icon.icon_id">
              <svg class="icon">
                <use :xlink:href="'#yi-iconc-' + icon.font_class"></use>
              </svg>
              <div class="desc yi-h6">{{'#yi-iconc-' + icon.font_class}}</div>
              <div class="opera">
                <div class="copy">
                  <yi-button text>复制代码</yi-button>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import normalIcons from '@source/_font/normal/iconfont.json'
import colorIcons from '@source/_font/color/iconfont.json'
export default {
  name: '',
  data () {
    return {
      normalIcons,
      colorIcons
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

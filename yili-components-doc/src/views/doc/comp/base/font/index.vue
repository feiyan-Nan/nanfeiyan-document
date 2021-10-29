<template>
  <div class="ycp-font ycp-doc">
    <section class="ycp-doc-item">
      <header>Typography 字体</header>
      <p class="content">伊利组件库对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
    </section>

    <section class="ycp-doc-item">
      <header>字体预览</header>
      <div class="ex-item">
        <p class="content">中文字体使用苹方 ( MAC OS ）, 微软雅黑 ( WIN ）</p>

        <yi-row class="font-item">
          <yi-col>
            <div class="yi-text-tip">PingFang SC ( MAC OS ）</div>
            <img class="font-img"
                 src="/resource/images/font/苹方中文.png">
          </yi-col>
          <yi-col>
            <div class="yi-text-tip">Microsoft Yahei ( WIN ）</div>
            <img class="font-img"
                 src="/resource/images/font/微软雅黑.png">
          </yi-col>
        </yi-row>
      </div>

      <div class="ex-item">
        <p class="content">英文和数字字体使用苹方 ( MAC OS ）, 微软雅黑 ( WIN ）</p>
        <yi-row class="font-item">
          <yi-col>
            <div class="yi-text-tip">PingFang SC ( MAC OS ）</div>
            <img class="font-img"
                 src="/resource/images/font/苹方英文.png">
          </yi-col>
          <yi-col>
            <div class="yi-text-tip">Helvetica Neve ( WIN ）</div>
            <img class="font-img"
                 src="/resource/images/font/hele英文.png">
          </yi-col>
          <yi-col>
            <div class="yi-text-tip">Arial ( WIN ）</div>
            <img class="font-img"
                 src="/resource/images/font/arial英文.png">
          </yi-col>
        </yi-row>
      </div>
    </section>

    <section class="ycp-doc-item">
      <header>字体使用规范</header>
      <el-table :data="DocConfig.fonts">
        <el-table-column label="样式">
          <template slot-scope="scope">
            <span :class="'yi-' + scope.row.cls">消费者数字化运营平台</span>
          </template>
        </el-table-column>
        <el-table-column prop="size"
                         label="字号"
                         width="80">
        </el-table-column>
        <el-table-column prop="lh"
                         label="行高"
                         width="80">
        </el-table-column>
        <el-table-column prop="color"
                         label="字色">
        </el-table-column>
        <el-table-column prop="desc"
                         label="使用场景">
        </el-table-column>
      </el-table>
    </section>

  </div>
</template>

<script>
import DocConfig from './config/doc'
export default {
  name: '',
  data () {
    return {
      DocConfig
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

const base = {
  name: 'MessageBase',
  template:
    `<yi-button-group>
      <yi-button type="info"
                @click="showMessage()"
                line>默认</yi-button>
      <yi-button type="info"
                @click="showMessage('success')"
                line>成功</yi-button>
      <yi-button type="info"
                @click="showMessage('warning')"
                line>警告</yi-button>
      <yi-button type="info"
                @click="showMessage('info')"
                line>信息</yi-button>
      <yi-button type="info"
                @click="showMessage('error')"
                line>错误</yi-button>
    </yi-button-group>`,
  methods: {
    showMessage (type) {
      this.$message({
        type,
        message: '我是一个全局消息'
      })
    }
  }
}

const close = {
  name: 'MessageClose',
  template:
    `<yi-button-group>
      <yi-button type="info"
                @click="showMessage()"
                line>默认</yi-button>
      <yi-button type="info"
                @click="showMessage('success')"
                line>成功</yi-button>
      <yi-button type="info"
                @click="showMessage('warning')"
                line>警告</yi-button>
      <yi-button type="info"
                @click="showMessage('info')"
                line>信息</yi-button>
      <yi-button type="info"
                @click="showMessage('error')"
                line>错误</yi-button>
    </yi-button-group>`,
  methods: {
    showMessage (type) {
      this.$message({
        type,
        showClose: true,
        message: '我是可关闭的一个全局消息'
      })
    }
  }
}

export default {
  base, close
}
